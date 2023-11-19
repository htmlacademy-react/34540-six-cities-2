import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {TOffers} from '../../types/offer.ts';

type TAppProps = {
  offers: TOffers;
}

function App({offers}: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers}
            />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage/>}
          />
          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export {App};
