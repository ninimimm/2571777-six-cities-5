import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferOwnInfo } from '../../store/api-actions';
import { OfferOwnInfo } from '../../types/offer-own-info.type';
import { MemoizedAuthHeader } from '../auth-header/auth-header';
import { MemoizedOffersList } from '../main-screen/lists/rental-offers-list';
import { MemoizedSpinner } from '../main-screen/spinner';
import { MemoizedOfferInfo } from './offer-info';

function OfferScreen(): JSX.Element {
  const nearestOffers = useAppSelector((state) => state.nearestOffers).slice(
    0,
    3
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();
  let offerId = '';
  if (id) {
    offerId = id;
  }
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (offerId) {
        dispatch(fetchOfferOwnInfo({ offerId: offerId, onlyData: false }));
      }
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, offerId]);

  const currentOffer = useAppSelector(
    (state) => state.offerOwnInfo
  ) as OfferOwnInfo;
  const isOfferPageLoading = useAppSelector(
    (state) => state.isOfferPageLoading
  );
  if (!currentOffer || isOfferPageLoading) {
    return <MemoizedSpinner />;
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
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <MemoizedAuthHeader />
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <MemoizedOfferInfo offer={currentOffer} />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <MemoizedOffersList
              offers={nearestOffers}
              offerClassNameType={'near-places'}
              offersDivClassName={'near-places__list places__list'}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

const MemoizedOfferScreen = memo(OfferScreen);
export default MemoizedOfferScreen;
