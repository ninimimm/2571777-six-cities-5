import { useState } from 'react';
import { RentalOffer } from '../../models';
import { RentalOfferCard } from './index';

export type RentalOfferListProps = {
  rentalOfferList: RentalOffer[];
};

export function RentalOfferList({
  rentalOfferList,
}: RentalOfferListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {rentalOfferList.length} places to stay in Amsterdam
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {rentalOfferList.map((rentalOffer) => (
              <div
                key={rentalOffer.id}
                onMouseEnter={() => handleMouseEnter(rentalOffer.id)}
                onMouseLeave={handleMouseLeave}
              >
                <RentalOfferCard
                  rentalOffer={rentalOffer}
                  isActive={activeOfferId === rentalOffer.id}
                />
              </div>
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  );
}
