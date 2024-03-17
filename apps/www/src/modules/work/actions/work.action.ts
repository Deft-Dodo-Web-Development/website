/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";

import qs from "qs";
import { AppConfig } from "@/config/app.config";
import {
  ProjectsServerResponse,
  ProjectServerResponse,
} from "../types/response";

config();

async function baseFetch<TData>(id?: string | number) {
  const query = qs.stringify({
    populate: [
      "description",
      "description.badges",
      "description.image",
      "description.image.image",
      "description.heading",
      "seo",
    ],
  });
  const baseUrl = `${AppConfig.strapi.url}/api/projects`;
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

export async function getAllWorkAction() {
  const data = baseFetch<ProjectsServerResponse>();
  return data;
}

export async function getWorkAction(id: string | number) {
  const data = baseFetch<ProjectServerResponse>(id);
  return data;
}
