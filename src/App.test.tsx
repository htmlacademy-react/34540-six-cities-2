import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {App} from './App.tsx';
import {browserHistory} from './browser-history.ts';
import {ApiRoute, AppRoute, AuthorizationStatus, SortName, StoreNameSlice, CityLocations, CityName} from './const.ts';
import {createAPI} from './services/api.ts';
import type {TUser} from './types/user.ts';
import type {TOffers} from './types/offer.ts';
import type {TComment} from './types/comment.ts';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const offers: TOffers = [
  {
    id: '1',
    price: 99,
    rating: 3.0,
    title: 'Test Offer 1',
    isPremium: true,
    isFavorite: false,
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
];

const comments: TComment = {
  id: '1',
  comment: 'Test comment 1',
  date: '20-02-2024',
  rating: 3.0,
  user
};


const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument({api})];

mockAPI
  .onGet(`${ApiRoute.Offers}/1`)
  .reply(200, offers[0]);


const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
  },
  [StoreNameSlice.SiteProcess]: {
    sorting: SortName.Popular,
    city: {
      name: CityName.Paris,
      location: CityLocations[CityName.Paris]
    }
  },
  [StoreNameSlice.SiteData]: {
    offers,
    isOffersLoading: false,
    offer: offers[0],
    isOfferLoading: false,
    favoriteOffers: offers,
    isFavoriteOffersLoading: false,
    nearbyOffers: [],
    comments
  }
});

const fakeApp = (
  <App fakeStore={store}/>
);

describe('Application Routing', () => {
  it('should render "Main" page when user navigates to "/"', () => {
    browserHistory.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(`1 place to stay in ${CityName.Paris}`)).toBeInTheDocument();
    expect(screen.getByText(SortName.Popular)).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText(offers[0].title)).toBeInTheDocument();
  });

  it('should render "Login" page when user navigates to "/login"', () => {
    browserHistory.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render "Favorites" page when user navigates to "/favorites"', () => {
    browserHistory.push(`${AppRoute.Favorites}`);

    render(fakeApp);

    expect(screen.getByText(offers[0].title)).toBeInTheDocument();
    expect(screen.getByText(offers[0].type)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
    expect(screen.getByRole('img', {name: 'Place'})).toHaveAttribute('src', offers[0].previewImage);
  });

  it('should render "NotFound" page when user navigates to "/not-exists"', () => {
    browserHistory.push('/not-exists');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });

  it('should render "Offer" page when user navigates to "/offer/:id"', () => {
    browserHistory.push(`${AppRoute.Offer}/1`);

    render(fakeApp);

    expect(screen.getByText(offers[0].title)).toBeInTheDocument();
    expect(screen.getByText(offers[0].description || '')).toBeInTheDocument();
    expect(screen.getByText(offers[0].type)).toBeInTheDocument();
  });
});
