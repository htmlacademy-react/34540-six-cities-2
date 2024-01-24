import {createSelector} from '@reduxjs/toolkit';
import {sortingFilters} from '../../utils.ts';
import {StoreNameSlice} from '../../const.ts';
import {getCity, getSorting} from '../site-process/selectors.ts';
import type {TState} from '../../types/state.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TComments} from '../../types/comment.ts';


const getIsOffersLoading = (state: TState): boolean => state[StoreNameSlice.SiteData].isOffersLoading;
const getOffers = (state: TState): TOffers => state[StoreNameSlice.SiteData].offers;

const getIsOfferLoading = (state: TState): boolean => state[StoreNameSlice.SiteData].isOfferLoading;
const getOffer = (state: TState): TOffer | null => state[StoreNameSlice.SiteData].offer;

const getNearbyOffers = (state: TState): TOffers => state[StoreNameSlice.SiteData].nearbyOffers;
const getComments = (state: TState): TComments => state[StoreNameSlice.SiteData].comments;

const selectOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(sortingFilters[sorting])
);


export {
  getIsOffersLoading,
  getOffers,
  getIsOfferLoading,
  getOffer,
  getNearbyOffers,
  getComments,
  selectOffers
};
