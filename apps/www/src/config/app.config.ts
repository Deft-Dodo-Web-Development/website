/* eslint-disable turbo/no-undeclared-env-vars */
import { config } from "dotenv";

config();

export const AppConfig = {
  strapi: {
    url: process.env.NEXT_PUBLIC_STRAPI_URL,
    accessToken: process.env.STRAPI_ACCESS_TOKEN,
  },
};
