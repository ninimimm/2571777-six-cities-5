import { CityEnum, Coordinate } from './index.js';

export type City = {
  title: CityEnum;
  coordinate: Coordinate;
  zoom: number;
}
