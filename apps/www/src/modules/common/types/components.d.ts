import {
  FeaturedItem,
  Media,
  Step,
  StrapiResponse,
  TeamMember,
} from "./common.d";
import {
  Projects as BaseProjects,
  Services as BaseServices,
  Testimonials as BaseTestimonials,
  ClientList,
  MediaResponse,
  Heading as BaseHeading,
} from "./common";

export namespace Components {
  export interface Heading {
    id: number;
    __component: "home.heading";
    finish: string;
    with_container: boolean;
    start: {
      id: number;
      title: string;
      sub_title: string;
      with_container: boolean;
    };
  }

  export interface HeadingCarousel {
    id: number;
    __component: "home.heading-carousel";
    with_container: boolean;
    first_text: string;
    second_text: string;
    video: {
      id: number;
      youtube_video_hash: string;
      overlay: MediaResponse;
    };
  }

  export interface AboutUs {
    id: number;
    __component: "home.about-us";
    with_container: boolean;
    content: string;
    heading: BaseHeading;
  }

  export interface Projects {
    id: number;
    __component: "home.projects";
    with_container: boolean;
    heading: BaseHeading;
    projects: StrapiResponse<BaseProjects[]>;
  }

  export interface Services {
    id: number;
    __component: "home.services";
    with_container: boolean;
    title: string;
    description: string;
    cta_url: string;
    services: StrapiResponse<BaseServices[]>;
    heading: BaseHeading;
  }

  export interface Separator {
    id: number;
    __component: "common.separator";
    with_container: boolean;
    margin_button: number;
    margin_top: number;
  }

  export interface Clients {
    id: number;
    __component: "home.clients";
    with_container: boolean;
    list: ClientList[];
  }

  export interface Spacer {
    id: number;
    __component: "common.spacer";
    height: number;
  }

  export interface KeyFacts {
    id: number;
    __component: "home.key-facts";
    title: string;
    featured: FeaturedItem[];
    with_container: boolean;
  }

  export interface StepByStep {
    id: number;
    __component: "home.step-by-step";
    title: string;
    with_container: boolean;
    steps: Step[];
  }

  export interface Testimonials {
    id: number;
    __component: "home.testimonials";
    with_container: boolean;
    title: string;
    testimonials: StrapiResponse<BaseTestimonials[]>;
  }

  export interface Team {
    id: number;
    __component: "home.team";
    with_container: boolean;
    heading: BaseHeading;
    members: StrapiResponse<TeamMember[]>;
  }

  export interface ContactUs {
    id: number;
    __component: "home.contact-us";
    with_container: boolean;
    heading: BaseHeading;
    description: string;
  }

  export interface Experience {
    id: number;
    __component: "home.experience";
    with_container: boolean;
    title: string;
    description: string;
    button: {
      text: string;
      url: string;
      variant: string;
    };
  }

  export interface BrandsMarquee {
    with_container?: boolean;
    __component: "home.brands-marquee";
    speed: number;
    list: StrapiResponse<Media[]>;
    heading: BaseHeading;
  }

  export interface Badge {
    id: number;
    __component: "common.badge";
    title: string;
  }

  export interface RichEditor {
    id: number;
    __component: "common.rich-editor";
    body: string;
  }

  export interface Image {
    id: number;
    __component: "common.image";
    image: MediaResponse;
    width?: number;
    height?: number;
  }

  export interface Overview {
    id: number;
    __component: "common.overview";
    title: string;
    description: string;
  }
  export interface ImageWithText {
    id: number;
    __component: "common.image-with-text";
    image_alignment?: "left" | "right";
    description: string;
    heading?: BaseHeading;
    image?: Image;
    badges?: Badge[];
    overviews?: Overview[];
  }
}

export type ComponentsOptions =
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
  | Components.Team
  | Components.ContactUs
  | Components.Experience
  | Components.BrandsMarquee
  | Components.Badge
  | Components.RichEditor
  | Components.Image
  | Components.ImageWithText;
