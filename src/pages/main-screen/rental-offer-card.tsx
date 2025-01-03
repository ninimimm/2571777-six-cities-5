import { memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentOfferId } from '../../store/action';
import { changeOfferIsFavoriteStatus } from '../../store/api-actions';
import { MainPageOffer } from '../../types/main-page-offer.type';
import { AppRoute, AuthorizationStatus } from '../const';

type OfferCardProps = {
  offer: MainPageOffer;
  classNameType: string;
};

function RentalOfferCard({ offer, classNameType }: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const handleOnMouseOver = useCallback(
    () => dispatch(setCurrentOfferId(offer.id)),
    [dispatch, offer.id]
  );
  const handleOnMouseOut = useCallback(
    () => dispatch(setCurrentOfferId('')),
    [dispatch]
  );
  const handleOnClick = useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(
        changeOfferIsFavoriteStatus({
          offerId: offer.id,
          status: +!offer.isFavorite,
        })
      );
    }
  }, [authorizationStatus, dispatch, navigate, offer.id, offer.isFavorite]);
  return (
    <article
      className={`${classNameType}__card place-card`}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={`${classNameType}__image-wrapper place-card__image-wrapper`}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${
              offer.isFavorite ? ' place-card__bookmark-button--active' : ''
            } button`}
            type="button"
            onClick={handleOnClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${Math.round(offer.rating) * 20}%`,
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export const MemoizedOfferCard = memo(RentalOfferCard);
