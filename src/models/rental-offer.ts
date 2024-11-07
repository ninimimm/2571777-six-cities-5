import {
  City,
  Convenience,
  HousingType,
  Rating,
  User,
} from './index.js';
export type RentalOffer = {
  id: string;
  name: string;
  offerDescription: string;
  publicationDate: Date;
  city: City;
  previewUrl: string;
  housingImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: Rating;
  housingType: HousingType;
  roomsCount: number;
  guestsCount: number;
  rentalCost: number;
  convenienceList: Convenience[];
  author: string;
  commentsCount: number;
  creater: User;
  fullOfferDescription: string;
};
