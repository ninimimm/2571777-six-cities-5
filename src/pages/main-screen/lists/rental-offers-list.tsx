import { memo } from 'react';
import { MainPageOffers } from '../../../types/main-page-offer.type';
import { MemoizedOfferCard } from '../rental-offer-card';

type OffersProps = {
  offers: MainPageOffers;
  offerClassNameType: string;
  offersDivClassName: string;
};

function RentalOffersList({
  offers,
  offerClassNameType,
  offersDivClassName,
}: OffersProps): JSX.Element {
  return (
    <div className={offersDivClassName}>
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <MemoizedOfferCard
            offer={offer}
            key={keyValue}
            classNameType={offerClassNameType}
          />
        );
      })}
    </div>
  );
}
export const MemoizedOffersList = memo(RentalOffersList);
