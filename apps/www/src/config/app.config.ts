/* eslint-disable turbo/no-undeclared-env-vars */
import { config } from "dotenv";

config();

const port = process.env.NEXT_PUBLIC_STRAPI_PORT;
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const contain_port = /:\d+/.test(strapi_url || "");

const url = port ? `${strapi_url}:${port}` : strapi_url;

export const AppConfig = {
  strapi: {
    url: contain_port ? strapi_url : url,
    accessToken: process.env.STRAPI_ACCESS_TOKEN,
  },
};
