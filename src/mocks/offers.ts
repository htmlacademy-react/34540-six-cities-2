import {TOffers} from '../types/offer.ts';

const offers: TOffers = [
  {
    id: 'a995b47b-ca31-4d52-9548-c762a637362c',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 272,
    previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '3b6df1ce-f53b-4851-9312-29ce4a719a0c',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 694,
    previewImage: 'https://13.design.pages.academy/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7
  },
  {
    id: '2298485c-21d5-4fe5-9980-64491f2661d3',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 118,
    previewImage: 'https://13.design.pages.academy/static/hotel/4.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.4
  },
  {
    id: 'f0bb0483-3d1c-4a85-857d-322faa0e69e4',
    title: 'Tile House',
    type: 'room',
    price: 253,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.9
  }
];

export {offers};
