import { CityEnum, Coordinate } from './index.js';

export type City = {
  id: number;
  title: CityEnum;
  coordinate: Coordinate;
  zoom: number;
}
