/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";
import { baseFetch } from "@/modules/common/utilities/fetch";
import { TestimonialsServerResponse } from "@/modules/common/types/testimonial";

config();

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
    const populate = [
        "title",
        "message",
        "identity",
        "identity.*",
        "identity.picture",
        "identity.company_logo",
    ];

    return baseFetch<T>({
        entity: "testimonials",
        populate,
        by: filter,
    });
};

export async function getTestimonialsData() {
    const data = await fetchData<TestimonialsServerResponse>();

    return data;
}