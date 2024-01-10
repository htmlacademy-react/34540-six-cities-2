import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, CityName, CityLocations, SortName} from '../const.ts';
import type {TState} from '../types/state.ts';
import {setCity, setSorting, fetchOffers, fetchUserStatus} from './actions.ts';


const initialState: TState = {
  city: {
    name: CityName.Paris,
    location: CityLocations[CityName.Paris]
  },
  offers: [],
  isOffersLoading: false,
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
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocations[action.payload]
      };
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {reducer};
