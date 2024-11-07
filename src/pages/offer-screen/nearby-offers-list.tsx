import { RentalOfferCard } from '../../components/rental-offer-card';
import { RentalOffer } from '../../models';

export type NearbyOffersListProps = {
  rentalOfferList: RentalOffer[];
};

export function NearbyOffersList({
  rentalOfferList,
}: NearbyOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {rentalOfferList.map((offer) => (
          <RentalOfferCard
            key={offer.id}
            rentalOffer={offer}
            isActive
            isNearPlaces
          />
        ))}
      </div>
    </section>
  );
}
