"use server";

import {
  ServicesServerResponse,
  ServiceServerResponse,
} from "../types/response";
import { baseFetch } from "@/modules/common/utilities/fetch";

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
  const populate = [
    "description",
    "description.badges",
    "description.image",
    "description.image.image",
    "description.heading",
    "seo",
  ];

  return baseFetch<T>({
    entity: "services",
    populate,
    by: filter,
  });
};

export async function getAllServiceAction() {
  const data = fetchData<ServicesServerResponse>();
  return data;
}

export async function getServiceAction(id: string | number) {
  const data = fetchData<ServiceServerResponse>({ id });
  return data;
}

export async function getServiceBySlugAction(slug: string) {
  const data = fetchData<ServiceServerResponse>({ slug });
  return data;
}
