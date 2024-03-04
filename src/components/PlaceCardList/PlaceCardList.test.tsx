import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {PlaceCardList} from './PlaceCardList.tsx';
import {CityLocations, CityName} from '../../const.ts';
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

const offers: TOffers = [
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
];

const city: TCity = {
  name: CityName.Paris,
  location: {
    latitude: 10,
    longitude: 12,
    zoom: 13
  }
};

describe('Component: PlaceCardList', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with offer info', () => {
    const expectedText = new RegExp(`to stay in ${city.name}`);

    render(
      <Provider store={store}>
        <PlaceCardList
          activeCity={city}
          offers={offers}
        />
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
