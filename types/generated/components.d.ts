import type { Schema, Attribute } from '@strapi/strapi';

export interface HowItWorkCardHowItWorkCard extends Schema.Component {
  collectionName: 'components_how_it_work_card_how_it_work_cards';
  info: {
    displayName: 'howItWorkCard';
  };
  attributes: {
    label: Attribute.Text;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'how-it-work-card.how-it-work-card': HowItWorkCardHowItWorkCard;
    }
  }
}
