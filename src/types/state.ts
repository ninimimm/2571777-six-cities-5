
import { City, RentalOffer } from '../models';
import { SortTypes } from '../pages/const';
import {store} from '../store';

export type AppState = {
  currentOfferId: number | undefined;
  cities: City[];
  offers: RentalOffer[];
  sortingType: SortTypes;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
