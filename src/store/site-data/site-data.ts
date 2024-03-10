import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSlice} from '../../const.ts';
import {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchComments,
  postComment,
  fetchFavoriteOffers,
  postFavorite
} from '../actions.ts';
import type {TSiteData} from '../../types/state.ts';


const initialState: TSiteData = {
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

const siteData = createSlice({
  name: StoreNameSlice.SiteData,
  initialState,
  reducers: {
    clearFavoriteOffers: (state) => {
      state.offers = state.offers.map((offer) => offer.isFavorite ? {...offer, isFavorite: false} : offer);
      state.favoriteOffers = [];
    }
  },
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
        state.comments = [...state.comments, action.payload];
      })
      .addCase(postComment.rejected, (state) => {
        state.isPostCommentSuccess = false;
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
      .addCase(postFavorite.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

        if (state.offer && state.offer.id === updatedOffer.id) {
          state.offer = updatedOffer;
        }

        if (updatedOffer.isFavorite) {
          state.favoriteOffers = state.favoriteOffers.concat(updatedOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
        }
      });
  }
});


export {siteData};
export const {clearFavoriteOffers} = siteData.actions;
