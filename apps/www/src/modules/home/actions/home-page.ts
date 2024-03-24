/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";
import {
  HomePageSeoServerResponse,
  HomePageServerResponse,
} from "../types/response";
import qs from "qs";
import { AppConfig } from "@/config/app.config";
import { baseFetch } from "@/modules/common/utilities/fetch";

config();

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
  const populate = [
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
    "pageContent.services.icon",
    "pageContent.featured",
    "pageContent.steps",
    "pageContent.testimonials",
    "pageContent.testimonials.identity",
    "pageContent.testimonials.identity.picture",
    "pageContent.testimonials.identity.company_logo",
    "pageContent.members",
    "pageContent.members.picture",
    "pageContent.members.social",
    "pageContent.contact-us",
    "pageContent.experience",
    "pageContent.button",
    "pageContent.articles",
    "pageContent.blogs",
    "pageContent.blogs.image",
    "pageContent.blogs.categories",
  ];

  return baseFetch<T>({
    entity: "home-page",
    populate,
    by: filter,
  });
};

export async function getHomePageData() {
  const data = await fetchData<HomePageServerResponse>();
  return data;
}

export async function getSeoPageData() {
  const query = qs.stringify({
    populate: ["seo"],
  });

  try {
    const request = await fetch(
      `${AppConfig.strapi.url}/api/home-page?${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
        },
        next: { tags: ["strapi"] },
      }
    );

    const data = await request.json();
    return data as HomePageSeoServerResponse;
  } catch (error) {
    console.error("Error fetching SEO data", error);
    return null;
  }
}
