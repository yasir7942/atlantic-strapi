import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInfomation extends Schema.Component {
  collectionName: 'components_seo_seo_infomations';
  info: {
    displayName: 'seoInfomation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDesctiption: Attribute.Text;
    schema: Attribute.Text;
    metaTags: Attribute.Text;
    canonicalLinks: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-infomation': SeoSeoInfomation;
    }
  }
}
