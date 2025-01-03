import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { MainPageOffers } from '../../types/main-page-offer.type';
import { MemoizedFavoriteOffer } from './favorite-offer-card';

function FavoritesOfferList(): JSX.Element {
  const offers = [...useAppSelector((state) => state.favoriteOffers)].reduce<
    Record<string, MainPageOffers>
  >((acc, item) => {
    if (!acc[item.city.name]) {
      acc[item.city.name] = [];
    }
    acc[item.city.name].push(item);
    return acc;
  }, {});
  return (
    <div className="favorites__places">
      {Object.entries(offers).map((offer, id) => {
        const keyValue = `favorite-offer-${id}`;
        return (
          <div key={keyValue} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{offer[0]}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offer[1].map((realOffer, anotherId) => {
                const keyValueAnother = `favorite-offer-card-${anotherId}`;
                return (
                  <MemoizedFavoriteOffer
                    offer={realOffer}
                    key={keyValueAnother}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const MemoizedFavoritesOfferList = memo(FavoritesOfferList);
