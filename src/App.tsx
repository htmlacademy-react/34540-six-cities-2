import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {lazy, useEffect} from 'react';
import {AppRoute} from './const.ts';
import {MainPage} from './pages/main-page/main-page.tsx';
import {LoginPage} from './pages/login-page/login-page.tsx';
import {OfferPage} from './pages/offer-page/offer-page.tsx';
import {FavoritesPage} from './pages/favorites-page/favorites-page.tsx';
import {HistoryRouter} from './components/history-router/history-router.tsx';
import {browserHistory} from './browser-history.ts';
import {PrivateRoute} from './components/private-route/private-route.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchUserStatus, fetchOffers, fetchFavoriteOffers} from './store/actions.ts';
import type {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

const NotFoundPage = lazy(() => import('./pages/not-found-page/not-found-page.tsx'));


type TFakeStoreProps = {
  fakeStore?: ToolkitStore;
}

const App = ({fakeStore}: TFakeStoreProps) => {
  useEffect(() => {
    store.dispatch(fetchUserStatus());
    store.dispatch(fetchOffers());
    store.dispatch(fetchFavoriteOffers());
  }, []);

  return (
    <Provider store={fakeStore ?? store}>
      <HistoryRouter history={browserHistory}>
        <HelmetProvider>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<MainPage/>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesPage/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage/>}
            />
            <Route
              path={`${AppRoute.Offer}/:offerId`}
              element={<OfferPage/>}
            />
            <Route
              path='*'
              element={<NotFoundPage/>}
            />
          </Routes>
        </HelmetProvider>
      </HistoryRouter>
    </Provider>
  );
};


export {App};
