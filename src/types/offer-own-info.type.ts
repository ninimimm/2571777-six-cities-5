import { Host } from './host.type';
import { MainPageOffer } from './main-page-offer.type';

export type OfferOwnInfo = Omit<MainPageOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
