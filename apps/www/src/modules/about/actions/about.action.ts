/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";
import {
    AboutUsPageSeoServerResponse,
    AboutUsPageServerResponse,
} from "../types/response";
import { baseFetch } from "@/modules/common/utilities/fetch";
import qs from "qs";
import { AppConfig } from "@/config/app.config";

config();

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
    const populate = [
        "pageContent",
        "pageContent.heading",
        "pageContent.testimonials",
        "pageContent.testimonials.identity",
        "pageContent.testimonials.identity.picture",
        "pageContent.testimonials.identity.company_logo",
        "pageContent.team",
        "pageContent.members",
        "pageContent.members.picture",
        "pageContent.members.social",
        "seo",
    ];

    return baseFetch<T>({
        entity: "about-us-page",
        populate,
        by: filter,
    });
};

export async function getAboutUsPageData() {
    const data = await fetchData<AboutUsPageServerResponse>();
    return data;
}

export async function getSeoPageData() {
    const query = qs.stringify({
        populate: ["seo"],
    });

    try {
        const request = await fetch(
            `${AppConfig.strapi.url}/api/about-us-page?${query}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
                },
                next: { revalidate: 60 },
            }
        );

        const data = await request.json();
        return data as AboutUsPageSeoServerResponse;
    } catch (error) {
        console.error("Error fetching SEO data", error);
        return null;
    }
}
