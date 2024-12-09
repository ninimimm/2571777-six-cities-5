export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  BadRoute = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OfferPlace {
  Apartment = 'Apartment',
  Room = 'Room'
}

export enum Rating {
  OneStar = 20,
  TwoStar = 40,
  ThreeStar = 60,
  FourStar = 80,
  FiveStar = 100
}

export enum OwnerStatus {
  Beginner = 'Beginner',
  Middle = 'Middle',
  Pro = 'Pro',
  Legend = 'Legend'
}

export enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceFromLow = 'Price: low to high',
  PriceFromHigh = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const MapUrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MapAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export enum ApiRoutes {
  Offers = 'offers',
  Login = 'login',
  Logout = 'logout',
  Comments = 'comments'
}

export const TokenKey = 'six-cities-token';
export const ApiUrl = 'https://14.design.htmlacademy.pro/six-cities';

export const Timeout = 5000;
