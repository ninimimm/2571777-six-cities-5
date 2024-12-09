import {store} from '../store/index.js';
import { AuthorizationStatus, SortTypes } from '../pages/const';
import { Reviews } from './review';
import { City, RentalOffer } from '../models/index.js';

export type AppState = {
  cities: City[];
  currentOfferId: string;
  offers: RentalOffer[];
  sortingType: SortTypes;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  name: string;
  offerOwnInfo: RentalOffer | null;
  isOfferPageLoading: boolean;
  reviews: Reviews;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
