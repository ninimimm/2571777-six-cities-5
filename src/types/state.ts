
import { City, RentalOffer } from '../models';
import {store} from '../store';

export type InitialState = {
  cities: City[];
  offers: RentalOffer[];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
