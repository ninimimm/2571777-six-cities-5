import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortTypes } from '../pages/const';
import { AppState } from '../types/state.type';
import {
  changeCity,
  setAuthStatus,
  setCurrentOfferId,
  setEmail,
  setFavoriteOffers,
  setFavoriteOffersLoadingStatus,
  setLoadingStatus,
  setNearestOffers,
  setOfferOwnInfo,
  setOfferPageLoadingStatus,
  setOffers,
  setReviews,
  setSortingType,
} from './action';

const initialState: AppState = {
  currentOfferId: '',
  city: { location: { latitude: 0, longitude: 0, zoom: 0 }, name: '' },
  offers: [],
  sortingType: SortTypes.Popular,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  isOfferPageLoading: false,
  offerOwnInfo: null,
  reviews: [],
  nearestOffers: [],
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setSortingType, (state, { payload }) => {
      state.sortingType = payload;
    })
    .addCase(setCurrentOfferId, (state, { payload }) => {
      state.currentOfferId = payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.isLoading = payload;
    })
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setEmail, (state, { payload }) => {
      state.email = payload;
    })
    .addCase(setOfferOwnInfo, (state, { payload }) => {
      state.offerOwnInfo = payload;
    })
    .addCase(setOfferPageLoadingStatus, (state, { payload }) => {
      state.isOfferPageLoading = payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(setNearestOffers, (state, { payload }) => {
      state.nearestOffers = payload;
    })
    .addCase(setFavoriteOffers, (state, { payload }) => {
      state.favoriteOffers = payload;
    })
    .addCase(setFavoriteOffersLoadingStatus, (state, { payload }) => {
      state.isFavoriteOffersLoading = payload;
    });
});
