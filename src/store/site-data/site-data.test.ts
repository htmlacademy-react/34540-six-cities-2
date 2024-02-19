import {siteData} from './site-data.ts';
import {StoreNameSlice, CityName, CityLocations} from '../../const.ts';
import {
  fetchComments,
  fetchFavoriteOffers,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  postComment,
  postFavorite
} from '../actions.ts';
import type {TOffers} from '../../types/offer.ts';
import type {TUser} from '../../types/user.ts';
import type {TComments} from '../../types/comment.ts';


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

const comments: TComments = [
  {
    id: '1',
    comment: 'Test comment',
    date: '19-02-2024',
    rating: 3.0,
    user
  }
];

const initialState = {
  offers: [],
  isOffersLoading: true,
  offer: null,
  isOfferLoading: true,
  nearbyOffers: [],
  comments: [],
  isPostCommentSuccess: true,
  favoriteOffers: [],
  isFavoriteOffersLoading: true
};

describe(`Reducer: ${StoreNameSlice.SiteProcess}`, () => {
  it('should return initial state without additional parameters', () => {
    expect(siteData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        isOffersLoading: true,
        offer: null,
        isOfferLoading: true,
        nearbyOffers: [],
        comments: [],
        isPostCommentSuccess: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: true
      });
  });

  it('should fetch offers', () => {
    expect(siteData.reducer(initialState, {type: fetchOffers.pending.type}))
      .toEqual({
        offers: [],
        isOffersLoading: true,
        offer: null,
        isOfferLoading: true,
        nearbyOffers: [],
        comments: [],
        isPostCommentSuccess: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: true
      });

    expect(siteData.reducer(initialState, {type: fetchOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: true,
        nearbyOffers: [],
        comments: [],
        isPostCommentSuccess: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: true
      });
  });

  it('should fetch offer', () => {
    expect(siteData.reducer(initialState, {type: fetchOffer.pending.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: true,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(initialState, {type: fetchOffer.fulfilled.type, payload: offers[0]}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: offers[0],
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(initialState, {type: fetchOffer.rejected.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch favorite offers', () => {
    expect(siteData.reducer(initialState, {type: fetchFavoriteOffers.pending.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: true,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(initialState, {type: fetchFavoriteOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: offers,
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    expect(siteData.reducer(initialState, {type: fetchFavoriteOffers.rejected.type}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });

  it('should fetch nearby offers', () => {
    expect(siteData.reducer(initialState, {type: fetchNearbyOffers.fulfilled.type, payload: offers}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: offers,
        comments: [],
      });
  });

  it('should fetch nearby comments', () => {
   expect(siteData.reducer(initialState, {type: fetchComments.fulfilled.type, payload: comments}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });


  it('should post comment', () => {
    expect(siteData.reducer(initialState, {type: postComment.fulfilled.type, payload: comments}))
      .toEqual({
        offers: [],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments,
      });
  });

  it('should post favorite', () => {
    const state = {
      offers,
      isOffersLoading: false,
      offer: null,
      isOfferLoading: false,
      favoriteOffers: [] as TOffers,
      isFavoriteOffersLoading: false,
      nearbyOffers: [],
      comments: [],
    };

    expect(siteData.reducer(state, {
      type: postFavorite.fulfilled.type,
      payload: {...offers[0], isFavorite: true}
    }))
      .toEqual({
        offers: [{...offers[0], isFavorite: true}],
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [{...offers[0], isFavorite: true}],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });

    state.offers = [{...offers[0], isFavorite: true}];
    state.favoriteOffers = [{...offers[0], isFavorite: true}];

    expect(siteData.reducer(initialState, {
      type: postFavorite.fulfilled.type,
      payload: {...offers[0], isFavorite: false}
    }))
      .toEqual({
        offers,
        isOffersLoading: false,
        offer: null,
        isOfferLoading: false,
        favoriteOffers: [],
        isFavoriteOffersLoading: false,
        nearbyOffers: [],
        comments: [],
      });
  });
});
