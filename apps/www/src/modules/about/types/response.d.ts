import { Footer, Seo } from "@/modules/common/types/common";
import { ComponentsOptions } from "@/modules/common/types/components";
import {
    BaseServerAttributes,
    ServerResponse,
} from "@/modules/common/types/server";

export type AboutUsPageServerResponse = ServerResponse<AboutUsPageAttributes>;
export type AboutUsPageSeoServerResponse = ServerResponse<AboutUsPageSeoAttributes>;

interface AboutUsPageAttributes extends BaseServerAttributes {
    pageContent: Array<ComponentsOptions>;
    Footer: Footer;
}

interface AboutUsPageSeoAttributes extends BaseServerAttributes {
    seo: Seo;
}
