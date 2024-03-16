import { Client } from "pg";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";

dotenv.config();

const execAsync = promisify(exec);

async function main() {
  const exportsDir = getExportDirs();
  const latestExport = readExports(exportsDir);
  const command = `pnpm strapi import -f "${path.join(exportsDir, latestExport)}" --force`;

  const client = await db();
  await createTable(client);

  if (await checkExist(client, latestExport)) {
    console.log("✅ Migration already exists");
    return process.exit(0);
  }

  await runCommand(command);
  await insertMigration(client, latestExport);

  await client.end();

  console.log("✅ Migration completed");
  process.exit(0);
}

async function db() {
  const data = {
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
  };

  const connectionString =
    process.env.DATABASE_URL ||
    `postgresql://${data.user}:${data.password}@${data.host}:${data.port}/${data.database}`;

  const client = new Client({ connectionString });
  console.log("\n⏰ Connecting to database");
  await client.connect();
  console.log("✅ Connected to database");

  return client;
}

async function createTable(client: Client) {
  console.log("\n⏰ Creating table if not exists");
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS custom_migration (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `;

  await client.query(createTableQuery);
  console.log("✅ Table created");
}

async function checkExist(client: Client, name: string) {
  console.log("\n⏰ Checking if migration exists");

  const checkMigrationQuery = `
  SELECT * FROM custom_migration WHERE name = $1;
  `;
  const { rows } = await client.query(checkMigrationQuery, [name]);
  return rows.length > 0;
}

async function runCommand(command: string) {
  console.log("\n⏰ Running command");
  const { stdout, stderr } = await execAsync(command);
  console.log(stdout);

  if (stderr) {
    if (stderr.includes("error")) {
      console.error("❌ Error importing data", stderr);
      return process.exit(1);
    }
  }

  console.log("✅ Command executed");
}

async function insertMigration(client: Client, name: string) {
  console.log("\n⏰ Inserting migration into database");

  const insertMigrationQuery = `
  INSERT INTO custom_migration (name) VALUES ($1);
  `;

  await client.query("BEGIN");
  await client.query(insertMigrationQuery, [name]);
  await client.query("COMMIT");

  console.log("✅ Migration inserted\n\n");
}

function getExportDirs() {
  let currentDir = path.join(__dirname);

  if (currentDir.includes("apps/api/")) {
    const splicedDir = currentDir.split("apps/api/");
    currentDir = `./${splicedDir[splicedDir.length - 1]}`;
  }

  if (currentDir.includes("dist"))
    return path.join(currentDir, "..", "..", "exports");

  return path.join(currentDir, "..", "exports");
}

function readExports(exportsDir: string) {
  const files = fs
    .readdirSync(exportsDir)
    .filter((file) => file.startsWith("export_") && file.endsWith(".tar.gz"));

  if (files.length === 0) throw new Error("No export files found");
  const latestExport = files.sort().reverse()[0];

  return latestExport;
}

main();
