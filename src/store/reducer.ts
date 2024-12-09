import { createReducer } from '@reduxjs/toolkit';
import { rentalOfferList } from '../mocks';
import { changeCities, setOffers } from './action';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  cities: rentalOfferList.map((offer) => offer.city),
  offers: rentalOfferList
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCities, (state, { payload }) => {
      state.cities = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = rentalOfferList;
    });
});
