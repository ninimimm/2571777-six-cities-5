import { Navigate, useParams } from 'react-router-dom';
import { ReviewList } from '../../components/app/review';
import { RentalOffer } from '../../models';
import { Map } from '../../map/index';
import { NearbyOffersList } from './nearby-offers-list';

export type WelcomeScreenProps = {
  rentalOfferList: RentalOffer[];
};

function OfferScreen({ rentalOfferList }: WelcomeScreenProps): JSX.Element {
  const { id } = useParams();
  const rentalOffer = rentalOfferList.find((x) => x.id === id);
  if (!rentalOffer) {
    return <Navigate to="*" />;
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
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{rentalOffer.offerDescription}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rentalOffer.rating}` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {+rentalOffer.rating.split('%')[0] / 20}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {rentalOffer.housingType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {rentalOffer.roomsCount} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {rentalOffer.guestsCount} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{rentalOffer.rentalCost}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {rentalOffer.convenienceList.map((convenience) => (
                    <li className="offer__inside-item" key={convenience}>
                      {convenience}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{rentalOffer.name}</span>
                  <span className="offer__user-status">
                    {rentalOffer.creater.type}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {rentalOffer.fullOfferDescription}
                  </p>
                </div>
              </div>
              <ReviewList reviewList={rentalOffer.reviews} />
            </div>
          </div>
          <section className="offer__map map">
            <Map
              cities={rentalOfferList.map((rentalOfferItem) => rentalOfferItem.city)}
            />
          </section>
        </section>
        <div className="container">
          <NearbyOffersList rentalOfferList={rentalOfferList}/>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
