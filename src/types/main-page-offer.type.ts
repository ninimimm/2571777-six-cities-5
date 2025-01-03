import { City } from './city.type';
import { Location } from './location.type';

export type MainPageOffer = {
  id: string;
  title: string;
  city: City;
  location: Location;
  previewImage: string;
  rating: number;
  price: number;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
};

export type MainPageOffers = MainPageOffer[];
