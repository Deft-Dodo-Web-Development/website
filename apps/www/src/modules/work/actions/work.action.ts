/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { baseFetch } from "@/modules/common/utilities/fetch";
import {
  ProjectsServerResponse,
  ProjectServerResponse,
} from "../types/response";

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
  const populate = [
    "description",
    "description.badges",
    "description.image",
    "description.image.image",
    "description.heading",
    "description.overview",
    "seo",
  ];

  return baseFetch<T>({
    entity: "projects",
    populate,
    by: filter,
  });
};

export async function getAllWorkAction() {
  const data = fetchData<ProjectsServerResponse>();
  return data;
}

export async function getWorkAction(id: string | number) {
  const data = fetchData<ProjectServerResponse>({ id });
  return data;
}

export async function getWorkBySlugAction(slug: string) {
  const data = fetchData<ProjectServerResponse>({ slug });
  return data;
}
