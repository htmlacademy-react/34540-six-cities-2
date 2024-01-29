import {StoreNameSlice} from '../../const.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TComments} from '../../types/comment.ts';
import type {TStateReducer} from '../../types/state.ts';


const getIsOffersLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isOffersLoading;
const getOffers = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].offers;

const getIsOfferLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isOfferLoading;
const getOffer = (state: TStateReducer): TOffer | null => state[StoreNameSlice.SiteData].offer;

const getNearbyOffers = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].nearbyOffers;
const getComments = (state: TStateReducer): TComments => state[StoreNameSlice.SiteData].comments;

export const getIsFavoriteOffersLoading = (state: TStateReducer): boolean => state[StoreNameSlice.SiteData].isFavoriteOffersLoading;
export const getFavoriteOffers = (state: TStateReducer): TOffers => state[StoreNameSlice.SiteData].favoriteOffers;


export {
  getIsOffersLoading,
  getOffers,
  getIsOfferLoading,
  getOffer,
  getNearbyOffers,
  getComments
};
