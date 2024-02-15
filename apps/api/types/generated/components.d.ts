import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonClients extends Schema.Component {
  collectionName: 'components_common_clients';
  info: {
    displayName: 'client';
    icon: 'user';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    width: Attribute.Decimal;
    height: Attribute.Decimal;
  };
}

export interface CommonHeadingCarousel extends Schema.Component {
  collectionName: 'components_common_heading_carousels';
  info: {
    displayName: 'Heading Carousel';
    icon: 'briefcase';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    first_text: Attribute.Text;
    second_text: Attribute.Text;
  };
}

export interface CommonHeading extends Schema.Component {
  collectionName: 'components_common_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CommonSectionContentWithTitle extends Schema.Component {
  collectionName: 'components_common_section_content_with_title_s';
  info: {
    displayName: 'Section Content (with title)';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface CommonSeparator extends Schema.Component {
  collectionName: 'components_common_separators';
  info: {
    displayName: 'Separator';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CommonVideo extends Schema.Component {
  collectionName: 'components_common_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
  };
  attributes: {
    overlay: Attribute.Media & Attribute.Required;
    youtube_video_url: Attribute.String;
  };
}

export interface HomeAboutUs extends Schema.Component {
  collectionName: 'components_home_about_uses';
  info: {
    displayName: 'About Us';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    start_content: Attribute.Component<'common.section-content-with-title'>;
    end_content: Attribute.RichText;
  };
}

export interface HomeClients extends Schema.Component {
  collectionName: 'components_home_clients';
  info: {
    displayName: 'Clients';
    icon: 'user';
    description: '';
  };
  attributes: {
    list: Attribute.Component<'common.clients', true>;
    with_container: Attribute.Boolean;
  };
}

export interface HomeHeadingCarousel extends Schema.Component {
  collectionName: 'components_home_heading_carousels';
  info: {
    displayName: 'Heading Carousel';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    first_text: Attribute.Text;
    second_text: Attribute.Text;
    video: Attribute.Component<'common.video'>;
  };
}

export interface HomeHeading extends Schema.Component {
  collectionName: 'components_home_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    start: Attribute.Component<'common.heading'>;
    finish: Attribute.String;
  };
}

export interface HomeProjects extends Schema.Component {
  collectionName: 'components_home_projects';
  info: {
    displayName: 'Projects';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'home.projects',
      'oneToMany',
      'api::project.project'
    >;
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    Title: Attribute.String;
  };
}

export interface HomeServices extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Services';
    icon: 'bulletList';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    services: Attribute.Relation<
      'home.services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.clients': CommonClients;
      'common.heading-carousel': CommonHeadingCarousel;
      'common.heading': CommonHeading;
      'common.section-content-with-title': CommonSectionContentWithTitle;
      'common.separator': CommonSeparator;
      'common.video': CommonVideo;
      'home.about-us': HomeAboutUs;
      'home.clients': HomeClients;
      'home.heading-carousel': HomeHeadingCarousel;
      'home.heading': HomeHeading;
      'home.projects': HomeProjects;
      'home.services': HomeServices;
    }
  }
}
