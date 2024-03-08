import { Footer } from "@/modules/common/types/common";
import { Components } from "@/modules/common/types/components";
import {
  BaseServerAttributes,
  ServerResponse,
} from "@/modules/common/types/server";

export type HomePageServerResponse = ServerResponse<HomePageAttributes>;

interface HomePageAttributes extends BaseServerAttributes {
  pageContent: Array<PageContent>;
  Footer: Footer;
}

type PageContent =
  | Components.AboutUs
  | Components.HeadingCarousel
  | Components.Heading
  | Components.Projects
  | Components.Services
  | Components.Separator
  | Components.Clients
  | Components.Spacer;
