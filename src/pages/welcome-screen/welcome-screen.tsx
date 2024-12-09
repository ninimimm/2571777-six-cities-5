import { RentalOfferList } from '../../components/rental-offer-card';
import { Map } from '../../map/index';
import { RentalOffer } from '../../models';
import { useAppSelector } from '../../hooks';
import CitiesList from './cities-list';

export type WelcomeScreenProps = {
  rentalOffersList: RentalOffer[];
};

export function WelcomeScreen(): JSX.Element {
  const cities = useAppSelector((state) => state.cities);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city === cities[0]);
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
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities.filter((item, pos) => cities.indexOf(item) === pos)} />
          </section>
        </div>
      </main>
      <div className="cities">
        <div className="cities__places-container container">
          <RentalOfferList rentalOfferList={currentOffers} cities={cities} />
          <div className="cities__right-section">
            <Map
              cities={currentOffers.map((rentalOffer) => rentalOffer.city)}
              className="cities__map map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
