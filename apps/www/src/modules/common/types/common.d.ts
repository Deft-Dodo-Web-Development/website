import { ComponentsOptions } from "./components";
import { BaseServerAttributes } from "./server";

export interface Footer {
  id: number;
  deftdodo_banner: boolean;
}

export interface ProjectsAttributes extends BaseServerAttributes {
  slug: any;
  title: string;
  summary: string;
  locale: string;
  description?: Array<ComponentsOptions>;
  image: MediaResponse;
  seo: Seo;
  locale: string;
}

export interface Projects {
  id: number;
  attributes: ProjectsAttributes;
}

export interface ServiceAttributes extends BaseServerAttributes {
  title: string;
  summary: string;
  description?: Array<ComponentsOptions>;
  cta: string;
  slug: string;
  icon: string;
  seo: Seo;
  locale: string;
}

export interface Services {
  id: number;
  attributes: ServiceAttributes;
}

export interface BlogAttributes extends BaseServerAttributes {
  title: string;
  summary: string;
  body?: Array<ComponentsOptions>;
  image: MediaResponse;
  seo: Seo;
  locale: string;
}

export interface Blogs {
  id: number;
  attributes: BlogAttributes;
}

export interface IconAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Icon {
  id: number;
  attributes: IconAttributes;
}

export interface Identity {
  id: number;
  name: string;
  occupation: string;
  company_logo: MediaResponse;
  picture: MediaResponse;
}

export interface TestimonialAttributes {
  title: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  identity: Identity;
}

export interface Testimonials {
  id: number;
  attributes: TestimonialAttributes;
}

interface MediaSize {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

export interface Media {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    url: string;
    formats: {
      thumbnail: MediaSize;
      small: MediaSize;
      medium: MediaSize;
      large: MediaSize;
    };
  };
}

export type MediaResponse = StrapiResponse<Media>;

export interface StrapiResponse<TData> {
  data: TData;
}

export interface ClientList {
  id: number;
  width: number;
  height: number;
  image: MediaResponse;
}

export interface Heading {
  id: number;
  title: string;
  sub_title: string;
}

export interface FeaturedItem {
  id: number;
  text: string;
  featured: string;
  muted: string;
}

export interface Step {
  id: number;
  number: number;
  title: string;
  description: string;
}

export type SocialPlatform = "github" | "linkedin" | "twitter" | "facebook";

export interface Social {
  id: number;
  platform: SocialPlatform;
  link: string;
}

export interface TeamMemberAttributes {
  name: string;
  picture: MediaResponse;
  position: string;
  social: Social[];
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: number;
  attributes: TeamMemberAttributes;
}

export interface Seo {
  id: number;
  title: string;
  description: string;
  keywords: string;
  preventIndexing: boolean;
}
