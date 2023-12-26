import {createReducer} from '@reduxjs/toolkit';
import {CityName, CityLocations, SortName} from '../const.ts';
import type {TState} from '../types/state.ts';
import {setCity, setOffers, setSorting} from './actions.ts';


const initialState: TState = {
  city: {
    name: CityName.Paris,
    location: CityLocations[CityName.Paris]
  },
  offers: [],
  sorting: SortName.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityLocations[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
