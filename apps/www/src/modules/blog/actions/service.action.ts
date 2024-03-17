"use server";

import { BlogsServerResponse, BlogServerResponse } from "../types/response";
import { baseFetch } from "@/modules/common/utilities/fetch";

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
  const populate = [
    "body",
    "body.badges",
    "body.image",
    "body.image.image",
    "body.heading",
    "seo",
  ];

  return baseFetch<T>({
    entity: "blogs",
    populate,
    by: filter,
  });
};

export async function getAllBlogAction() {
  const data = fetchData<BlogsServerResponse>();
  return data;
}

export async function getBlogAction(id: string | number) {
  const data = fetchData<BlogServerResponse>({ id });
  return data;
}

export async function getBlogBySlugAction(slug: string) {
  const data = fetchData<BlogServerResponse>({ slug });
  return data;
}
