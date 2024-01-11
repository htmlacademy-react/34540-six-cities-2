import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useEffect} from 'react';
import {AppRoute} from './const.ts';
import {MainPage} from './pages/MainPage/MainPage.tsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.tsx';
import {LoginPage} from './pages/LoginPage/LoginPage.tsx';
import {OfferPage} from './pages/OfferPage/OfferPage.tsx';
import {FavoritesPage} from './pages/FavoritesPage/FavoritesPage.tsx';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute.tsx';
import type {TComments} from './types/comment.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchUserStatus, fetchOffers} from './store/actions.ts';


type TAppProps = {
  comments: TComments;
}

function App({comments}: TAppProps) {
  useEffect(() => {
    store.dispatch(fetchUserStatus());
    store.dispatch(fetchOffers());
  }, []);

  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
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
              element={<OfferPage comments={comments}/>}
            />
            <Route
              path='*'
              element={<NotFoundPage/>}
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export {App};
