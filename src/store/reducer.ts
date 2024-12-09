import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setAuthStatus, setCurrentOfferId, setLoadingStatus, setName, setOfferOwnInfo, setOfferPageLoadingStatus, setOffers, setReviews, setSortingType } from './action';
import { AppState } from '../types/state';
import { AuthorizationStatus, SortTypes } from '../pages/const';
import { CityEnum } from '../models';

const initialState: AppState = {
  currentOfferId: '',
  cities: [{
    id: 0,
    title: CityEnum.Amsterdam,
    coordinate: {latitude: 0, longitude: 0},
    zoom: 0,
  }],
  offers: [],
  sortingType: SortTypes.Popular,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  name: '',
  isOfferPageLoading: false,
  offerOwnInfo: null,
  reviews: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.cities = payload;
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
    .addCase(setName, (state, { payload }) => {
      state.name = payload;
    })
    .addCase(setOfferOwnInfo, (state, { payload }) => {
      state.offerOwnInfo = payload;
    })
    .addCase(setOfferPageLoadingStatus, (state, { payload }) => {
      state.isOfferPageLoading = payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    });
});
