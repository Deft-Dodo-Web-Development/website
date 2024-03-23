/* eslint-disable turbo/no-undeclared-env-vars */
import { config } from "dotenv";

config();

const port = process.env.PORT;
const strapi_url =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const contain_port = /:\d+/.test(strapi_url);

const url = port ? `${strapi_url}:${port}` : strapi_url;

export const AppConfig = {
  strapi: {
    url: contain_port ? strapi_url : url,
    accessToken: process.env.STRAPI_ACCESS_TOKEN,
  },
};
