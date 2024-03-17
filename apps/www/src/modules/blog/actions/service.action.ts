/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";

import qs from "qs";
import { AppConfig } from "@/config/app.config";
import { BlogsServerResponse, BlogServerResponse } from "../types/response";

config();

async function baseFetch<TData>(id?: string | number) {
  const query = qs.stringify({
    populate: [
      "body",
      "body.badges",
      "body.image",
      "body.image.image",
      "body.heading",
      "seo",
    ],
  });
  const baseUrl = `${AppConfig.strapi.url}/api/blogs`;
  const url = id ? `${baseUrl}/${id}?${query}` : `${baseUrl}?${query}`;

  const request = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
    },
    next: { revalidate: 120 },
  });

  const data = await request.json();

  return data as TData;
}

export async function getAllBlogAction() {
  const data = baseFetch<BlogsServerResponse>();
  return data;
}

export async function getBlogAction(id: string | number) {
  const data = baseFetch<BlogServerResponse>(id);
  return data;
}
