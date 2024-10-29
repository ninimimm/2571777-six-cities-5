import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { RentalOffer } from '../../models';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { WelcomeScreen } from '../../pages/welcome-screen/welcome-screen';
import PrivateRoute from './private-route';

type AppScreenProps = {
  rentalOfferList: RentalOffer[];
};

function App({ rentalOfferList }: AppScreenProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen rentalOffersList={rentalOfferList} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen rentalOffersList={rentalOfferList} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen rentalOfferList={rentalOfferList} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
