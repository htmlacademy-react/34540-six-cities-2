import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from './const.ts';
import {MainPage} from './pages/MainPage/MainPage.tsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.tsx';
import {LoginPage} from './pages/LoginPage/LoginPage.tsx';
import {OfferPage} from './pages/OfferPage/OfferPage.tsx';
import {FavoritesPage} from './pages/FavoritesPage/FavoritesPage.tsx';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute.tsx';
import type {TComments} from './types/comment.ts';


type TAppProps = {
  comments: TComments;
}

function App({comments}: TAppProps) {
  return (
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
  );
}

export {App};
