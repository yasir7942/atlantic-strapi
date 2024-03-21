import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutImage extends Schema.Component {
  collectionName: 'components_layout_images';
  info: {
    displayName: 'Image';
    icon: 'database';
  };
  attributes: {
    image: Attribute.Media;
    imageWebp: Attribute.Media;
  };
}

export interface SeoSeoInfomation extends Schema.Component {
  collectionName: 'components_seo_seo_infomations';
  info: {
    displayName: 'seoInfomation';
    icon: 'search';
    description: '';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDesctiption: Attribute.Text;
    schema: Attribute.Text;
    metaTags: Attribute.Text;
    canonicalLinks: Attribute.String;
    preventIndexing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.image': LayoutImage;
      'seo.seo-infomation': SeoSeoInfomation;
    }
  }
}
