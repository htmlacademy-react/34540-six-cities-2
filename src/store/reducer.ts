import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, CityName, CityLocations, SortName} from '../const.ts';
import type {TState} from '../types/state.ts';
import {
  setCity,
  setSorting,
  fetchOffers,
  fetchOffer,
  fetchComments,
  postComment,
  fetchNearbyOffers,
  fetchUserStatus,
  loginUser
} from './actions.ts';


const initialState: TState = {
  city: {
    name: CityName.Paris,
    location: CityLocations[CityName.Paris]
  },
  offers: [],
  isOffersLoading: true,
  offer: null,
  isOfferLoading: true,
  nearbyOffers: [],
  comments: [],
  sorting: SortName.Popular,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocations[action.payload]
      };
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.user = '';
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export {reducer};
