import {render, screen} from '@testing-library/react';
import {PlaceCard} from './PlaceCard.tsx';
import {CityLocations, CityName} from '../../const.ts';
import type {TUser} from '../../types/user.ts';
import type {TOffer} from '../../types/offer.ts';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const offer: TOffer =
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
  };

describe('Component: PlaceCard', () => {
  it('should render correct with offer info', () => {
    render(
      <PlaceCard
        offer={offer}
        onMouseOver={()=>{}}
        onMouseLeave={()=>{}}
      />
    );

    expect(screen.getByText(offer.price)).toBeInTheDocument();
  });
});
