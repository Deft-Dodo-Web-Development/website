import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonClients extends Schema.Component {
  collectionName: 'components_common_clients';
  info: {
    displayName: 'clients';
    icon: 'user';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
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

export interface CommonProject extends Schema.Component {
  collectionName: 'components_common_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    slug: Attribute.String & Attribute.Unique;
    image: Attribute.Media;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.clients': CommonClients;
      'common.heading-carousel': CommonHeadingCarousel;
      'common.heading': CommonHeading;
      'common.project': CommonProject;
      'common.section-content-with-title': CommonSectionContentWithTitle;
      'common.separator': CommonSeparator;
      'common.video': CommonVideo;
      'home.about-us': HomeAboutUs;
      'home.heading-carousel': HomeHeadingCarousel;
    }
  }
}
