import { Link } from 'react-router-dom';
import { RentalOffer } from '../../models';

export type RentalOfferCardProps = {
  rentalOffer: RentalOffer;
  isActive: boolean;
  isNearPlaces?: boolean;
};

export function RentalOfferCard({
  rentalOffer,
  isActive,
  isNearPlaces = false,
}: RentalOfferCardProps): JSX.Element {
  return (
    <article
      className={`${
        isNearPlaces ? 'near-places__card' : 'cities__card'
      } place-card ${isActive ? 'active' : ''}`}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div
        className={`${
          isNearPlaces ? 'near-places__image-wrapper' : 'cities__image-wrapper'
        } place-card__image-wrapper`}
      >
        <Link to={`/offer/${rentalOffer.id}`}>
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{rentalOffer.rentalCost}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rentalOffer.rating}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${rentalOffer.id}`}>
            {rentalOffer.offerDescription}
          </Link>
        </h2>
        <p className="place-card__type">{rentalOffer.housingType}</p>
      </div>
    </article>
  );
}
