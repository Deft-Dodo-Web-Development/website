/* eslint-disable turbo/no-undeclared-env-vars */
"use server";

import { config } from "dotenv";
import { baseFetch } from "@/modules/common/utilities/fetch";
import { FooterServerResponse } from "@/modules/common/types/footer";

config();

const fetchData = function <T>(filter?: { [key: string]: string | number }) {
    const populate = [
        "info",
        "socials",
        "copyright"
    ];

    return baseFetch<T>({
        entity: "footer",
        populate,
        by: filter,
    });
};

export async function getFooterData() {
    const data = await fetchData<FooterServerResponse>();
    return data;
}
