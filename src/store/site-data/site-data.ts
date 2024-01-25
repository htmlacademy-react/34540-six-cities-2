import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSlice} from '../../const.ts';
import {fetchOffers, fetchOffer, fetchNearbyOffers, fetchComments, postComment} from '../actions.ts';
import type {TSiteData} from '../../types/state.ts';


const initialState: TSiteData = {
  offers: [],
  isOffersLoading: true,
  offer: null,
  isOfferLoading: true,
  nearbyOffers: [],
  comments: []
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
      });
  }
});

export {siteData};
