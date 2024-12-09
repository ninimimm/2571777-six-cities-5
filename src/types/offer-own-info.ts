import { Host } from './host';
import { MainPageOffer } from './main-page-offer';

export type OfferOwnInfo = Omit<MainPageOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
