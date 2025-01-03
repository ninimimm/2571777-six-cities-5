export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  BadRoute = '*',
}

export enum ApiRoutes {
  Offers = 'offers',
  Login = 'login',
  Logout = 'logout',
  Comments = 'comments',
  NearbySuffix = 'nearby',
  Favorite = 'favorite',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceFromLow = 'Price: low to high',
  PriceFromHigh = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MapUrlTemplate =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MapAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const TokenKey = 'six-cities-token';

export const ApiUrl = 'https://14.design.htmlacademy.pro/six-cities';

export const Timeout = 5000;
