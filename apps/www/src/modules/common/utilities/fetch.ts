import { AppConfig } from "@/config/app.config";
import { config } from "dotenv";
import qs from "qs";
config();

export type BaseFetchParams = {
  entity: string;
  populate?: string[];
  by?: {
    [key: string]: string | number;
  };
};

export async function baseFetch<TData>({
  entity,
  populate,
  by,
}: BaseFetchParams): Promise<TData | null> {
  const id = by?.id;
  const filter = !id ? { filters: by } : {};
  const query = qs.stringify({
    populate,
    ...filter,
  });
  const baseUrl = `${AppConfig.strapi.url}/api/${entity}`;
  const url = id ? `${baseUrl}/${id}?${query}` : `${baseUrl}?${query}`;

  try {
    const request = await fetch(url, {
      method: "GET",
      headers: {
        // eslint-disable-next-line turbo/no-undeclared-env-vars
        Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
      },
      next: { revalidate: 120 },
    });

    const data = await request.json();

    if (by && data?.data) {
      return {
        ...data,
        data: (() => {
          if (data.data instanceof Array) {
            return data.data[0];
          }

          return data.data;
        })(),
      };
    }

    return data as TData;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}
