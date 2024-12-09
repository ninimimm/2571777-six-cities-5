import { createReducer } from '@reduxjs/toolkit';
import { rentalOfferList } from '../mocks';
import { changeCities, setCurrentOfferId, setOffers, setSortingType } from './action';
import { AppState } from '../types/state';
import { SortTypes } from '../pages/const';

const initialState: AppState = {
  currentOfferId: undefined,
  cities: rentalOfferList.map((offer) => offer.city),
  offers: rentalOfferList,
  sortingType: SortTypes.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCities, (state, { payload }) => {
      state.cities = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = rentalOfferList;
    })
    .addCase(setSortingType, (state, { payload }) => {
      state.sortingType = payload;
      const arrayForSort = [...rentalOfferList];
      switch (payload) {
        case SortTypes.Popular:
          state.offers = arrayForSort;
          break;
        case SortTypes.PriceFromHigh:
          state.offers = arrayForSort.sort((a, b) => b.rentalCost - a.rentalCost);
          break;
        case SortTypes.PriceFromLow:
          state.offers = arrayForSort.sort((a, b) => a.rentalCost - b.rentalCost);
          break;
        case SortTypes.TopRated:
          state.offers = arrayForSort.sort((a, b) => +b.rating.split('%')[0] - +a.rating.split('%')[0]);
          break;
      }
    })
    .addCase(setCurrentOfferId, (state, { payload }) => {
      state.currentOfferId = payload;
    });
});
