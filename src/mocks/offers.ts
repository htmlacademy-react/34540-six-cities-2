import {TOffers} from '../types/offer.ts';

const offers: TOffers = [
  {
    id: 'a995b47b-ca31-4d52-9548-c762a637362c',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 272,
    previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
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
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
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
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
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
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.9
  }
];

export {offers};
