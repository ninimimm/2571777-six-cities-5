import { memo, useCallback } from 'react';
import { useAppSelector } from '../../hooks';
import { MemoizedAuthHeader } from '../auth-header/auth-header';
import { SortTypes } from '../const';
import { MemoizedMainEmptyScreen } from '../main-empty-screen/main-empty-screen';
import { MemoizedSortingVariables } from './helpers/sorting-versions';
import MemoizedCitiesList from './lists/cities-list';
import { MemoizedOffersList } from './lists/rental-offers-list';
import { RentalOffersMap } from './map/rental-offers-map';

function MainScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const currentOfferId = useAppSelector((state) => state.currentOfferId);
  const offers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortingType);
  const getCurrentOffers = useCallback(() => {
    const offersToSort = [...offers];
    switch (sortType) {
      case SortTypes.Popular:
        return offersToSort;
      case SortTypes.PriceFromHigh:
        return offersToSort.sort((a, b) => b.price - a.price);
      case SortTypes.PriceFromLow:
        return offersToSort.sort((a, b) => a.price - b.price);
      case SortTypes.TopRated:
        return offersToSort.sort((a, b) => b.rating - a.rating);
    }
  }, [offers, sortType]);
  const currentOffers = getCurrentOffers().filter(
    (offer) => offer.city.name === city.name
  );
  if (offers.length === 0) {
    return <MemoizedMainEmptyScreen />;
  }
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <MemoizedAuthHeader />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <MemoizedCitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} places to stay in {city?.name}
              </b>
              <MemoizedSortingVariables />
              <MemoizedOffersList
                offers={currentOffers}
                offerClassNameType="cities"
                offersDivClassName={
                  'cities__places-list places__list tabs__content'
                }
              />
            </section>
            <div className="cities__right-section">
              <RentalOffersMap
                points={currentOffers.map((offer) => [
                  offer.location,
                  offer.id === currentOfferId,
                ])}
                className={'cities__map map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const MemoizedMainScreen = memo(MainScreen);
export default MemoizedMainScreen;
