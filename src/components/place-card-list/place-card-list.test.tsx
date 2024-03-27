import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {PlaceCardList} from './place-card-list.tsx';
import {createAPI} from '../../services/api.ts';
import thunk from 'redux-thunk';
import {AuthorizationStatus, CityLocations, CityName, SortName, StoreNameSlice} from '../../const.ts';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import type {TUser} from '../../types/user.ts';
import type {TOffers} from '../../types/offer.ts';
import type {TCity} from '../../types/city.ts';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const city: TCity = {
  name: CityName.Paris,
  location: CityLocations[CityName.Paris]
};

const offers: TOffers = [{
  id: '1',
  price: 99,
  rating: 3.0,
  title: 'Test Offer 1',
  isPremium: true,
  isFavorite: true,
  city,
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
}];

const api = createAPI();
const middlewares = [thunk.withExtraArgument({api})];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
  },
  [StoreNameSlice.SiteProcess]: {
    sorting: SortName.Popular,
    city
  },
  [StoreNameSlice.SiteData]: {
    offers,
    isOffersLoading: false,
    offer: offers,
    isOfferLoading: false,
    favoriteOffers: offers,
    isFavoriteOffersLoading: false,
    nearbyOffers: []
  }
});


describe('Component: PlaceCardList', () => {
  it('should render correct by main title', () => {
    const expectedText = `${offers.length} place to stay in ${city.name}`;

    render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <PlaceCardList
            activeCity={city}
            offers={offers}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
