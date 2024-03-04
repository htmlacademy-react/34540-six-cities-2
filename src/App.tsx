import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useEffect} from 'react';
import {AppRoute} from './const.ts';
import {MainPage} from './pages/MainPage/MainPage.tsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.tsx';
import {LoginPage} from './pages/LoginPage/LoginPage.tsx';
import {OfferPage} from './pages/OfferPage/OfferPage.tsx';
import {FavoritesPage} from './pages/FavoritesPage/FavoritesPage.tsx';
import {HistoryRouter} from './components/HistoryRouter/HistoryRouter.tsx';
import {browserHistory} from './browser-history.ts';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchUserStatus, fetchOffers, fetchFavoriteOffers} from './store/actions.ts';
import type {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';


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
