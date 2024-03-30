import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonBadge extends Schema.Component {
  collectionName: 'components_common_badges';
  info: {
    displayName: 'badge';
    icon: 'check';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

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

export interface CommonDisplayVideo extends Schema.Component {
  collectionName: 'components_common_display_videos';
  info: {
    displayName: 'Display Video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    video: Attribute.Component<'common.video'>;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface CommonFeaturedItem extends Schema.Component {
  collectionName: 'components_common_featured_items';
  info: {
    displayName: 'Featured Item';
    icon: 'star';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    featured: Attribute.String;
    muted: Attribute.String;
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

export interface CommonImageGallery extends Schema.Component {
  collectionName: 'components_common_image_galleries';
  info: {
    displayName: 'Image Gallery';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'common.heading'>;
    images: Attribute.Component<'common.image', true>;
  };
}

export interface CommonImageWithText extends Schema.Component {
  collectionName: 'components_common_image_with_texts';
  info: {
    displayName: 'Image With Text';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    image_alignment: Attribute.Enumeration<['right', 'left']> &
      Attribute.DefaultTo<'left'>;
    image: Attribute.Component<'common.image'>;
    badges: Attribute.Component<'common.badge', true>;
    heading: Attribute.Component<'common.section-content-with-title'>;
    overview: Attribute.Component<'project.overview', true>;
    description: Attribute.RichText;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    widht: Attribute.Decimal;
    height: Attribute.Decimal;
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

export interface CommonPicByDevice extends Schema.Component {
  collectionName: 'components_common_pic_by_devices';
  info: {
    displayName: 'picture by device';
    icon: 'command';
    description: '';
  };
  attributes: {
    desktop: Attribute.Media;
    tablet: Attribute.Media;
    mobile: Attribute.Media;
  };
}

export interface CommonRichEditor extends Schema.Component {
  collectionName: 'components_common_rich_editors';
  info: {
    displayName: 'Rich Editor';
    icon: 'medium';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
    with_container: Attribute.Boolean;
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
    title: Attribute.String & Attribute.Required;
    sub_title: Attribute.String;
    hierarchy: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    decription: Attribute.Text;
    keywords: Attribute.String;
    preventIndexing: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface CommonSocial extends Schema.Component {
  collectionName: 'components_common_socials';
  info: {
    displayName: 'social';
    icon: 'heart';
    description: '';
  };
  attributes: {
    platform: Attribute.Enumeration<
      ['linkedin', 'github', 'twitter', 'facebook']
    >;
    link: Attribute.String & Attribute.Required;
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

export interface CommonStep extends Schema.Component {
  collectionName: 'components_common_steps';
  info: {
    displayName: 'step';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    number: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface CommonTestimonialIdentity extends Schema.Component {
  collectionName: 'components_common_testimonial_identities';
  info: {
    displayName: 'testimonial identity';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    occupation: Attribute.String;
    picture: Attribute.Media;
    company_logo: Attribute.Media;
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

export interface HomeArticles extends Schema.Component {
  collectionName: 'components_home_articles';
  info: {
    displayName: 'Articles';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean;
    heading: Attribute.Component<'common.heading'>;
    blogs: Attribute.Relation<'home.articles', 'oneToMany', 'api::blog.blog'>;
    description: Attribute.Text;
    cta_url: Attribute.String;
  };
}

export interface HomeBrandsMarquee extends Schema.Component {
  collectionName: 'components_home_brands_marquees';
  info: {
    displayName: 'Brands Marquee';
    icon: 'cube';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    speed: Attribute.Decimal;
    list: Attribute.Media;
    heading: Attribute.Component<'common.section-content-with-title'>;
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

export interface HomeContactUs extends Schema.Component {
  collectionName: 'components_home_contact_uses';
  info: {
    displayName: 'contact us';
    icon: 'message';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    heading: Attribute.Component<'common.section-content-with-title'>;
    description: Attribute.Text;
  };
}

export interface HomeExperience extends Schema.Component {
  collectionName: 'components_home_experiences';
  info: {
    displayName: 'experience';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    button: Attribute.Component<'common.button'>;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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

export interface HomeKeyFacts extends Schema.Component {
  collectionName: 'components_home_key_facts';
  info: {
    displayName: 'key facts';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    featured: Attribute.Component<'common.featured-item', true>;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
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
    heading: Attribute.Component<'common.section-content-with-title'>;
  };
}

export interface HomeServices extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Services';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    services: Attribute.Relation<
      'home.services',
      'oneToMany',
      'api::service.service'
    >;
    heading: Attribute.Component<'common.section-content-with-title'>;
    description: Attribute.Text;
    cta_url: Attribute.String;
  };
}

export interface HomeStepByStep extends Schema.Component {
  collectionName: 'components_home_step_by_steps';
  info: {
    displayName: 'step by step';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    title: Attribute.String;
    steps: Attribute.Component<'common.step', true>;
  };
}

export interface HomeTeam extends Schema.Component {
  collectionName: 'components_home_teams';
  info: {
    displayName: 'Team';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'common.section-content-with-title'>;
    members: Attribute.Relation<
      'home.team',
      'oneToMany',
      'api::team-member.team-member'
    >;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface HomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    testimonials: Attribute.Relation<
      'home.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface ProjectOverview extends Schema.Component {
  collectionName: 'components_project_overviews';
  info: {
    displayName: 'Overview';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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
      'common.badge': CommonBadge;
      'common.button': CommonButton;
      'common.clients': CommonClients;
      'common.display-video': CommonDisplayVideo;
      'common.featured-item': CommonFeaturedItem;
      'common.heading-carousel': CommonHeadingCarousel;
      'common.heading': CommonHeading;
      'common.image-gallery': CommonImageGallery;
      'common.image-with-text': CommonImageWithText;
      'common.image': CommonImage;
      'common.link': CommonLink;
      'common.pic-by-device': CommonPicByDevice;
      'common.rich-editor': CommonRichEditor;
      'common.section-content-with-title': CommonSectionContentWithTitle;
      'common.seo': CommonSeo;
      'common.separator': CommonSeparator;
      'common.social': CommonSocial;
      'common.spacer': CommonSpacer;
      'common.step': CommonStep;
      'common.testimonial-identity': CommonTestimonialIdentity;
      'common.video': CommonVideo;
      'footer.copyright': FooterCopyright;
      'footer.elevate-section': FooterElevateSection;
      'footer.info': FooterInfo;
      'home.about-us': HomeAboutUs;
      'home.articles': HomeArticles;
      'home.brands-marquee': HomeBrandsMarquee;
      'home.clients': HomeClients;
      'home.contact-us': HomeContactUs;
      'home.experience': HomeExperience;
      'home.footer': HomeFooter;
      'home.heading-carousel': HomeHeadingCarousel;
      'home.heading': HomeHeading;
      'home.key-facts': HomeKeyFacts;
      'home.projects': HomeProjects;
      'home.services': HomeServices;
      'home.step-by-step': HomeStepByStep;
      'home.team': HomeTeam;
      'home.testimonials': HomeTestimonials;
      'project.overview': ProjectOverview;
      'shared.header': SharedHeader;
    }
  }
}
