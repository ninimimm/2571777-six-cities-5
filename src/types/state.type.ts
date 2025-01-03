import { AuthorizationStatus, SortTypes } from '../pages/const';
import { store } from '../store';
import { City } from './city.type';
import { MainPageOffers } from './main-page-offer.type';
import { OfferOwnInfo } from './offer-own-info.type';
import { Reviews } from './review.type';

export type AppState = {
  currentOfferId: string;
  city: City;
  offers: MainPageOffers;
  sortingType: SortTypes;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string;
  offerOwnInfo: OfferOwnInfo | null;
  isOfferPageLoading: boolean;
  reviews: Reviews;
  nearestOffers: MainPageOffers;
  favoriteOffers: MainPageOffers;
  isFavoriteOffersLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
