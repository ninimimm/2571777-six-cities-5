import { Reviews } from './review.type';
import { User } from './user.type.ts';

export type OfferProperties = {
  photosSrcs: string[];
  bedroomsCount: number;
  maxAdultsCount: number;
  insideItems: string[];
  owner: User;
  ownerDescription: string;
  reviews: Reviews;
  nearestOffersId: number[];
};
