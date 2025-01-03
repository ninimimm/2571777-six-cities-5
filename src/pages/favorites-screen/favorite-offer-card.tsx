import { memo, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeOfferIsFavoriteStatus } from '../../store/api-actions';
import { MainPageOffer } from '../../types/main-page-offer.type';

type FavoriteOfferProps = {
  offer: MainPageOffer;
};

function FavoriteOffer({ offer }: FavoriteOfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleOnClick = useCallback(() => {
    dispatch(changeOfferIsFavoriteStatus({ offerId: offer.id, status: 0 }));
  }, [dispatch, offer.id]);
  return (
    <article className="favorites__card place-card">
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleOnClick}
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${offer.rating}%`,
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export const MemoizedFavoriteOffer = memo(FavoriteOffer);
