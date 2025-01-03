import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOfferIsFavoriteStatus } from '../../store/api-actions';
import { OfferOwnInfo } from '../../types/offer-own-info.type';
import { AppRoute, AuthorizationStatus } from '../const';
import { RentalOffersMap } from '../main-screen/map/rental-offers-map';
import { MemoizedCommentSendingForm } from './comment-sending-form';
import { ReviewsList } from './reviews-list';

type OfferInfoProps = {
  offer: OfferOwnInfo;
};

function OfferInfo({ offer }: OfferInfoProps): JSX.Element {
  const nearestOffers = useAppSelector((state) => state.nearestOffers).slice(
    0,
    3
  );
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const reviews = [...useAppSelector((state) => state.reviews)]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
  const auth = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.slice(0, 6).map((imageSrc, index) => {
            const keyValue = `photo-${index}`;
            return (
              <div className="offer__image-wrapper" key={keyValue}>
                <img
                  className="offer__image"
                  src={imageSrc}
                  alt="Photo studio"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium ? (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{offer.title}</h1>
            <button
              className={`offer__bookmark-button${
                offer.isFavorite ? ' offer__bookmark-button--active' : ''
              } button`}
              type="button"
              onClick={handleOnClick}
            >
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span
                style={{
                  width: `${Math.round(offer.rating) * 20}%`,
                }}
              >
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">
              {offer.rating}
            </span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms}
              {offer.bedrooms > 1 ? ' Bedrooms' : ' Bedroom'}
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxAdults}
              {offer.maxAdults > 1 ? ' adults' : ' adult'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((item, index) => {
                const keyValue = `item-${index}`;
                return (
                  <li className="offer__inside-item" key={keyValue}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div
                className={`offer__avatar-wrapper${
                  offer.host.isPro ? ' offer__avatar-wrapper--pro' : ''
                } user__avatar-wrapper`}
              >
                <img
                  className="offer__avatar user__avatar"
                  src={offer.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{offer.host.name}</span>
              {offer.host.isPro && (
                <span className="offer__user-status">Pro</span>
              )}
            </div>
            <div className="offer__description">
              <p className="offer__text">{offer.description}</p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot;{' '}
              <span className="reviews__amount">{reviews.length}</span>
            </h2>
            <ReviewsList reviews={reviews} />
            {auth === AuthorizationStatus.Auth && (
              <MemoizedCommentSendingForm offerId={offer.id} />
            )}
          </section>
        </div>
      </div>
      <RentalOffersMap
        points={[...nearestOffers, offer].map((nearestOffer) => [
          nearestOffer.location,
          nearestOffer.id === offer.id,
        ])}
        className={'offer__map map'}
      >
      </RentalOffersMap>
    </section>
  );
}
export const MemoizedOfferInfo = memo(OfferInfo);
