import {
  Projects as BaseProjects,
  Services as BaseServices,
  MediaResponse,
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
    end_content: string;
    start_content: {
      id: number;
      title: string;
      content: string;
    };
  }

  export interface Projects {
    id: number;
    __component: "home.projects";
    with_container: boolean;
    title: string;
    projects: BaseProjects;
  }

  export interface Services {
    id: number;
    __component: "home.services";
    with_container: boolean;
    title: string;
    services: BaseServices;
  }

  export interface Separator {
    id: number;
    __component: "common.separator";
    with_container: boolean;
  }
}
