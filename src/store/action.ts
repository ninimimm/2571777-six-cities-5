import { createAction } from '@reduxjs/toolkit';
import { City } from '../models/index.js';

export const changeCities = createAction<City[]>('cities/change');
export const setOffers = createAction('offers/set');
