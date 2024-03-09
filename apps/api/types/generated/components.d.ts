import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'ghost']
    > &
      Attribute.DefaultTo<'default'>;
  };
}

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

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonSectionContentWithTitle extends Schema.Component {
  collectionName: 'components_common_section_content_with_title_s';
  info: {
    displayName: 'Section Content (with title)';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
  };
}

export interface CommonSeparator extends Schema.Component {
  collectionName: 'components_common_separators';
  info: {
    displayName: 'Separator';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    margin_button: Attribute.Float;
    margin_top: Attribute.Float;
  };
}

export interface CommonSpacer extends Schema.Component {
  collectionName: 'components_common_spacers';
  info: {
    displayName: 'spacer';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    height: Attribute.Float;
  };
}

export interface CommonVideo extends Schema.Component {
  collectionName: 'components_common_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    overlay: Attribute.Media & Attribute.Required;
    youtube_video_hash: Attribute.String;
  };
}

export interface FooterCopyright extends Schema.Component {
  collectionName: 'components_footer_copyrights';
  info: {
    displayName: 'copyright';
    icon: 'information';
  };
  attributes: {
    privacy: Attribute.Component<'common.link'>;
    back_to_top: Attribute.Boolean;
    copyright: Attribute.Text;
  };
}

export interface FooterElevateSection extends Schema.Component {
  collectionName: 'components_footer_elevate_sections';
  info: {
    displayName: 'elevate_section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    cta: Attribute.Component<'common.button'>;
  };
}

export interface FooterInfo extends Schema.Component {
  collectionName: 'components_footer_infos';
  info: {
    displayName: 'Info';
    icon: 'arrowDown';
  };
  attributes: {
    direction: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
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
    heading: Attribute.Component<'common.section-content-with-title'>;
    content: Attribute.RichText;
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

export interface HomeFooter extends Schema.Component {
  collectionName: 'components_home_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    deftdodo_banner: Attribute.Boolean & Attribute.DefaultTo<true>;
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
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean;
    heading_bold: Attribute.String & Attribute.Required;
    heading_thing: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.String;
    href: Attribute.String & Attribute.DefaultTo<'/'>;
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
    title: Attribute.String;
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

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    icon: 'layout';
    description: '';
  };
  attributes: {
    nav: Attribute.Component<'common.link', true>;
    CTA: Attribute.Component<'common.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button': CommonButton;
      'common.clients': CommonClients;
      'common.heading-carousel': CommonHeadingCarousel;
      'common.heading': CommonHeading;
      'common.link': CommonLink;
      'common.section-content-with-title': CommonSectionContentWithTitle;
      'common.separator': CommonSeparator;
      'common.spacer': CommonSpacer;
      'common.video': CommonVideo;
      'footer.copyright': FooterCopyright;
      'footer.elevate-section': FooterElevateSection;
      'footer.info': FooterInfo;
      'home.about-us': HomeAboutUs;
      'home.clients': HomeClients;
      'home.footer': HomeFooter;
      'home.heading-carousel': HomeHeadingCarousel;
      'home.heading': HomeHeading;
      'home.projects': HomeProjects;
      'home.services': HomeServices;
      'shared.header': SharedHeader;
    }
  }
}
