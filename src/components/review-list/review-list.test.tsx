import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {ReviewList} from './review-list.tsx';
import type {TComments} from '../../types/comment.ts';
import type {TUser} from '../../types/user.ts';
import {createAPI} from '../../services/api.ts';
import thunk from 'redux-thunk';
import {AuthorizationStatus, CityLocations, CityName, StoreNameSlice, SubmitStatus} from '../../const.ts';
import type {TOffers} from '../../types/offer.ts';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const offers: TOffers = [{
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
}];

const comments: TComments = [{
  id: '1',
  comment: 'Test comment 1',
  date: '20-02-2024',
  rating: 3.0,
  user
}];

const api = createAPI();
const middlewares = [thunk.withExtraArgument({api})];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
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

describe('Component: review', () => {
  it('should render correct with a title', () => {
    const expectedText = /Reviews ·/i;

    render(
      <Provider store={store}>
        <ReviewList
          comments={comments}
          authorizationStatus={AuthorizationStatus.Auth}
          onSubmit={()=> true}
          submitStatus={SubmitStatus.Fulfilled}
        />
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
