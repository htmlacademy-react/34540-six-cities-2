import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSlice} from '../../const.ts';
import {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchComments,
  postComment,
  fetchFavoriteOffers
} from '../actions.ts';
import type {TSiteData} from '../../types/state.ts';


const initialState: TSiteData = {
  offers: [],
  isOffersLoading: true,
  offer: null,
  isOfferLoading: true,
  nearbyOffers: [],
  comments: [],
  favoriteOffers: [],
  isFavoriteOffersLoading: true
};

const siteData = createSlice({
  name: StoreNameSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
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
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = true;
      })
  }
});


export {siteData};
