import { Footer, Seo } from "@/modules/common/types/common";
import { Components } from "@/modules/common/types/components";
import {
  BaseServerAttributes,
  ServerResponse,
} from "@/modules/common/types/server";

export type HomePageServerResponse = ServerResponse<HomePageAttributes>;
export type HomePageSeoServerResponse = ServerResponse<HomePageSeoAttributes>;
interface HomePageAttributes extends BaseServerAttributes {
  pageContent: Array<PageContent>;
  Footer: Footer;
}

interface HomePageSeoAttributes extends BaseServerAttributes {
  seo: Seo;
}

type PageContent =
  | Components.AboutUs
  | Components.HeadingCarousel
  | Components.Heading
  | Components.Projects
  | Components.Services
  | Components.Separator
  | Components.Clients
  | Components.Spacer
  | Components.KeyFacts
  | Components.StepByStep
  | Components.Testimonials
  | Components.Team;
