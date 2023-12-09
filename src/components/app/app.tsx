import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {MainPage} from '../../pages/main-page/main-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import type {TOffers} from '../../types/offer.ts';
import type {TComments} from '../../types/comment.ts';


type TAppProps = {
  offers: TOffers;
  comments: TComments;
}

function App({offers, comments}: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferPage offers={offers} comments={comments}/>}
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
