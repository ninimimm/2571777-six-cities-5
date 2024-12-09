import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/index.js';
import { SortTypes } from '../pages/const.js';

export const changeCities = createAction<City[]>('cities/change');
export const setOffers = createAction('offers/set');
export const setSortingType = createAction<SortTypes>('sorting/set');
export const setCurrentOfferId = createAction<number | undefined>('offer/set');
