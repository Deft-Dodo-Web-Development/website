/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";
import { HomePageServerResponse } from "../types/response";
import qs from "qs";
import { AppConfig } from "@/config/app.config";

config();

export async function getHomePageData() {
  const query = qs.stringify({
    populate: [
      "pageContent",
      "pageContent.video",
      "pageContent.video.overlay",
      "pageContent.start",
      "pageContent.start_content",
      "pageContent.projects",
      "pageContent.services",
      "pageContent.list.image",
      "pageContent.heading",
      "pageContent.projects.image",
    ],
  });
  const request = await fetch(
    `${AppConfig.strapi.url}/api/home-page?${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await request.json();

  return data as HomePageServerResponse;
}
