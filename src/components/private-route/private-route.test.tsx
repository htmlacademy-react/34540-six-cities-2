import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {PrivateRoute} from './private-route.tsx';
import {browserHistory} from '../../browser-history.ts';
import {AppRoute, AuthorizationStatus, StoreNameSlice} from '../../const.ts';


const EXPECTED_TEXT = 'public route';
const NOT_EXPECTED_TEXT = 'private route';

const mockStore = configureMockStore();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    browserHistory.push(AppRoute.Favorites);
  });

  it('should render component for the public route, when a user is not authorized', () => {
    const store = mockStore({
      [StoreNameSlice.UserProcess]: {
        authorizationStatus: AuthorizationStatus.NoAuth
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<h1>{EXPECTED_TEXT}</h1>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <h1>{NOT_EXPECTED_TEXT}</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(NOT_EXPECTED_TEXT)).not.toBeInTheDocument();
  });

  it('should render component for the private route, when a user is authorized', () => {
    const store = mockStore({
      [StoreNameSlice.UserProcess]: {
        authorizationStatus: AuthorizationStatus.Auth
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<h1>{EXPECTED_TEXT}</h1>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <h1>{NOT_EXPECTED_TEXT}</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(EXPECTED_TEXT)).not.toBeInTheDocument();
    expect(screen.getByText(NOT_EXPECTED_TEXT)).toBeInTheDocument();
  });
});
