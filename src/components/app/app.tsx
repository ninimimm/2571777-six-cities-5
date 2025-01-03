import { Route, Routes } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../pages/const';
import MemoizedFavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import MemoizedLoginScreen from '../../pages/login-screen/login-screen';
import MemoizedMainScreen from '../../pages/main-screen/main-screen';
import { MemoizedSpinner } from '../../pages/main-screen/spinner';
import { MemoizedNotFoundScreen } from '../../pages/page-not-found-screen/page-not-found-screen';
import MemoizedOfferScreen from '../../pages/offer-screen/offer-screen';
import { HistoryRouter } from '../history-router/history-router';
import { PrivateRoute } from '../private-route/private-route';

function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  if (isLoading) {
    return <MemoizedSpinner/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MemoizedMainScreen />} />
        <Route path={AppRoute.Login} element={<MemoizedLoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <MemoizedFavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<MemoizedOfferScreen />} />
        <Route path="*" element={<MemoizedNotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
