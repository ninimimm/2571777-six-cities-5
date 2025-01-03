import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { MemoizedAuthHeader } from '../auth-header/auth-header';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import { MemoizedSpinner } from '../main-screen/spinner';
import { MemoizedFavoritesOfferList } from './favorites-offers-list';

function FavoritesScreen(): JSX.Element {
  const isFavoriteOffersLoading = useAppSelector(
    (state) => state.isFavoriteOffersLoading
  );
  const offers = useAppSelector((state) => state.favoriteOffers);
  if (isFavoriteOffersLoading) {
    return <MemoizedSpinner />;
  }
  if (offers.length === 0) {
    return <FavoritesEmptyScreen />;
  }
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <MemoizedFavoritesOfferList />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

const MemoizedFavoritesScreen = memo(FavoritesScreen);
export default MemoizedFavoritesScreen;
