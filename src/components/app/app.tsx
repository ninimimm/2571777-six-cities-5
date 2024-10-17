import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from './private-route';

type AppScreenProps = {
  rentalOffersNumber: number;
};

function App({ rentalOffersNumber }: AppScreenProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen rentalOffersNumber={rentalOffersNumber} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
