import {
  changeCity,
  setAuthStatus,
  setCurrentOfferId,
  setEmail,
  setFavoriteOffers,
  setFavoriteOffersLoadingStatus,
  setLoadingStatus,
  setNearestOffers,
  setOfferOwnInfo,
  setOfferPageLoadingStatus,
  setReviews,
  setSortingType,
} from '../src/store/action';
import { AuthorizationStatus, SortTypes } from '../src/pages/const';

describe('Actions', () => {
  it('should create an action to change the city!!!', () => {
    const city = {
      location: { latitude: 1, longitude: 1, zoom: 10 },
      name: 'New York',
    };
    const expectedAction = { type: changeCity.type, payload: city };
    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('should create an action to set the auth status ', () => {
    const status = AuthorizationStatus.Auth;
    const expectedAction = { type: setAuthStatus.type, payload: status };
    expect(setAuthStatus(status)).toEqual(expectedAction);
  });

  it('should create an action to set the current offer ID', () => {
    const offerId = '1';
    const expectedAction = { type: setCurrentOfferId.type, payload: offerId };
    expect(setCurrentOfferId(offerId)).toEqual(expectedAction);
  });

  it('should create an action to set the email', () => {
    const email = 'test@example.com';
    const expectedAction = { type: setEmail.type, payload: email };
    expect(setEmail(email)).toEqual(expectedAction);
  });

  it('should create an action to set favorite offers', () => {
    const offers = [
      {
        id: '1',
        title: 'Offer 1',
        city: {
          name: 'City Name',
          location: { latitude: 0, longitude: 0, zoom: 0 },
        },
        location: { latitude: 0, longitude: 0, zoom: 10 },
        previewImage: 'image_url',
        rating: 4.5,
        price: 100,
        type: 'apartment',
        isPremium: true,
        isFavorite: false,
      },
    ];
    const expectedAction = { type: setFavoriteOffers.type, payload: offers };
    expect(setFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it('should create an action to set the loading status of favorite offers', () => {
    const status = false;
    const expectedAction = {
      type: setFavoriteOffersLoadingStatus.type,
      payload: status,
    };
    expect(setFavoriteOffersLoadingStatus(status)).toEqual(expectedAction);
  });

  it('should create an action to set loading status', () => {
    const status = true;
    const expectedAction = { type: setLoadingStatus.type, payload: status };
    expect(setLoadingStatus(status)).toEqual(expectedAction);
  });

  it('should create an action to set nearest offers', () => {
    const offers = [
      {
        id: '2',
        title: 'Offer 2',
        city: {
          name: 'City Name',
          location: { latitude: 0, longitude: 0, zoom: 0 },
        },
        location: { latitude: 0, longitude: 0, zoom: 10 },
        previewImage: 'image_url',
        rating: 4.5,
        price: 100,
        type: 'apartment',
        isPremium: true,
        isFavorite: false,
      },
    ];
    const expectedAction = { type: setNearestOffers.type, payload: offers };
    expect(setNearestOffers(offers)).toEqual(expectedAction);
  });

  it('should create an action to set offer own info', () => {
    const offerOwnInfo = {
      id: '3',
      title: 'Offer Title',
      city: {
        name: 'City Name',
        location: { latitude: 0, longitude: 0, zoom: 10 },
      },
      location: { latitude: 0, longitude: 0, zoom: 10 },
      previewImage: 'image_url',
      rating: 4.5,
      price: 100,
      type: 'apartment',
      isPremium: true,
      isFavorite: false,
      details: 'Offer details',
      description: 'This is a detailed description of the offer.',
      bedrooms: 2,
      goods: ['WiFi', 'Air conditioning', 'TV'],
      host: {
        name: 'John Doe',
        avatarUrl: 'avatar_url',
        isPro: true,
      },
      images: ['image1_url', 'image2_url'],
      maxAdults: 4,
    };
    const expectedAction = {
      type: setOfferOwnInfo.type,
      payload: offerOwnInfo,
    };
    expect(setOfferOwnInfo(offerOwnInfo)).toEqual(expectedAction);
  });

  it('should create an action to set the loading status of the offer page', () => {
    const status = false;
    const expectedAction = {
      type: setOfferPageLoadingStatus.type,
      payload: status,
    };
    expect(setOfferPageLoadingStatus(status)).toEqual(expectedAction);
  });

  it('should create an action to set reviews', () => {
    const reviews = [
      {
        id: '1',
        content: 'Great!',
        user: {
          name: 'John Doe',
          avatarUrl: 'avatar_url',
          isPro: true,
        },
        rating: 5,
        comment: 'Amazing experience, will come again!',
        date: '2025-01-01T12:00:00Z',
      },
      {
        id: '2',
        content: 'Not bad.',
        user: {
          name: 'Jane Doe',
          avatarUrl: 'avatar_url',
          isPro: false,
        },
        rating: 3,
        comment: 'Good value for money.',
        date: '2025-01-02T14:30:00Z',
      },
    ];
    const expectedAction = { type: setReviews.type, payload: reviews };
    expect(setReviews(reviews)).toEqual(expectedAction);
  });

  it('should create an action to set sorting type', () => {
    const sortType = SortTypes.PriceFromLow;
    const expectedAction = { type: setSortingType.type, payload: sortType };
    expect(setSortingType(sortType)).toEqual(expectedAction);
  });
});
