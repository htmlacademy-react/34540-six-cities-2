import {createSelector} from '@reduxjs/toolkit';
import {StoreNameSlice, SubmitStatus} from '../../const.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TComments} from '../../types/comment.ts';
import type {TStateReducer} from '../../types/state.ts';


const getIsOffersLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isOffersLoading;

const getIsOfferLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isOfferLoading;
const getOffer = (state: TStateReducer): TOffer | null => state[StoreNameSlice.SiteData].offer;
const getOffersByCity = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].offers.filter((offer: TOffer) => offer.city.name === state[StoreNameSlice.SiteProcess].city.name);

const getNearbyOffers = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].nearbyOffers;
const getComments = (state: TStateReducer): TComments => state[StoreNameSlice.SiteData].comments;
const getCommentStatus = (state: TStateReducer): SubmitStatus => state[StoreNameSlice.SiteData].commentStatus;


const getIsFavoriteOffersLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isFavoriteOffersLoading;
const getFavoriteOffers = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].favoriteOffers;


const selectComments = createSelector(
  [getComments],
  (comments) => [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
);


export {
  getIsOffersLoading,
  getIsOfferLoading,
  getOffer,
  getOffersByCity,
  getNearbyOffers,
  getComments,
  getCommentStatus,
  getIsFavoriteOffersLoading,
  getFavoriteOffers,
  selectComments
};
