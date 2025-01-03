import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortTypes } from '../pages/const';
import { City } from '../types/city.type';
import { MainPageOffers } from '../types/main-page-offer.type';
import { OfferOwnInfo } from '../types/offer-own-info.type';
import { Reviews } from '../types/review.type';

export const changeCity = createAction<City>('city/change');
export const setOffers = createAction<MainPageOffers>('offers/set');
export const setSortingType = createAction<SortTypes>('sorting/set');
export const setCurrentOfferId = createAction<string>('offer/set');
export const setLoadingStatus = createAction<boolean>('loading/set');
export const setAuthStatus = createAction<AuthorizationStatus>('auth/set');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setEmail = createAction<string>('email/set');
export const setOfferPageLoadingStatus = createAction<boolean>(
  'offerPageLoadingStatus/set'
);
export const setFavoriteOffersLoadingStatus = createAction<boolean>(
  'favoriteOffersLoadingStatus/set'
);
export const setOfferOwnInfo = createAction<OfferOwnInfo>('offerOwnInfo/set');
export const setReviews = createAction<Reviews>('reviews/set');
export const setNearestOffers =
  createAction<MainPageOffers>('nearestOffers/set');
export const setFavoriteOffers =
  createAction<MainPageOffers>('favoriteOffers/set');
