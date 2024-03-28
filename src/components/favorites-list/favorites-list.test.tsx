import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {FavoritesList} from './favorites-list.tsx';
import {AuthorizationStatus, CityLocations, CityName, StoreNameSlice} from '../../const.ts';
import type {TUser} from '../../types/user.ts';
import type {TOffers} from '../../types/offer.ts';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import {createAPI} from '../../services/api.ts';
import thunk from 'redux-thunk';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const offers: Record<string, TOffers> = {
  [CityName.Paris]: [
    {
      id: '1',
      price: 99,
      rating: 3.0,
      title: 'Test Offer 1',
      isPremium: true,
      isFavorite: true,
      city: {
        name: CityName.Paris,
        location: CityLocations[CityName.Paris]
      },
      location: CityLocations[CityName.Paris],
      previewImage: 'https://13.design.htmlacademy.pro/static/hotel/1.jpg',
      description: 'My house',
      type: 'hotel',
      goods: ['wi-fi', 'fridge'],
      bedrooms: 2,
      host: user,
      maxAdults: 2,
      images: [
        'https://13.design.htmlacademy.pro/static/hotel/1.jpg',
        'https://13.design.htmlacademy.pro/static/hotel/2.jpg',
        'https://13.design.htmlacademy.pro/static/hotel/3.jpg',
        'https://13.design.htmlacademy.pro/static/hotel/4.jpg',
        'https://13.design.htmlacademy.pro/static/hotel/5.jpg'
      ]
    }
  ]
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument({api})];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
  },
});


describe('Component: FavoritesList', () => {
  it('should render correct with a className equal to the "locations__list"', () => {
    const expectedClassName = 'favorites__list';

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <FavoritesList groupedOffersByCity={offers}/>
        </HistoryRouter>
      </Provider>
    );

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
