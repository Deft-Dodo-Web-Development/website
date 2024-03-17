import { Footer, Seo } from "@/modules/common/types/common";
import { ComponentsOptions } from "@/modules/common/types/components";
import {
  BaseServerAttributes,
  ServerResponse,
} from "@/modules/common/types/server";

export type HomePageServerResponse = ServerResponse<HomePageAttributes>;
export type HomePageSeoServerResponse = ServerResponse<HomePageSeoAttributes>;
interface HomePageAttributes extends BaseServerAttributes {
  pageContent: Array<ComponentsOptions>;
  Footer: Footer;
}

interface HomePageSeoAttributes extends BaseServerAttributes {
  seo: Seo;
}
