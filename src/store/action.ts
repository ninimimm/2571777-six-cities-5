import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/city.js';
import { AppRoute, AuthorizationStatus, SortTypes } from '../pages/const';
import { Reviews } from '../types/review';
import { RentalOffer } from '../models/rental-offer.js';

export const changeCity = createAction<City[]>('city/change');
export const setOffers = createAction<RentalOffer[]>('offers/set');
export const setSortingType = createAction<SortTypes>('sorting/set');
export const setCurrentOfferId = createAction<string>('offer/set');
export const setLoadingStatus = createAction<boolean>('loading/set');
export const setAuthStatus = createAction<AuthorizationStatus>('auth/set');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setName = createAction<string>('name/set');
export const setOfferPageLoadingStatus = createAction<boolean>('offerPageLoadingStatus/set');
export const setOfferOwnInfo = createAction<RentalOffer>('offerOwnInfo/set');
export const setReviews = createAction<Reviews>('reviews/set');
