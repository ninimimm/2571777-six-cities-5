import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../pages/const.js';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { WelcomeScreen } from '../../pages/welcome-screen/welcome-screen';
import PrivateRoute from './private-route';
import { useAppSelector } from '../../hooks';
import { MemoizedSpinner } from '../../pages/welcome-screen/spinner';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';

function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  if (isLoading){
    return(<MemoizedSpinner />);
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen/>}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen/>}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
