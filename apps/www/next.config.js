const dotenv = require('dotenv');
dotenv.config();

const url = process.env.NEXT_PUBLIC_STRAPI_URL;
const strapi = new URL(url);
const port = url.split(":")[2]?.replaceAll("/", "");

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [],
  images: {
    remotePatterns: [
      {
        protocol: strapi.protocol.slice(0, -1),
        hostname: strapi.hostname,
        port: port,
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ]
  }
};
