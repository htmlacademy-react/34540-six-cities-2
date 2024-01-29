import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreNameSlice, CityName, CityLocations, SortName} from '../../const.ts';
import type {TSiteProcess} from '../../types/state.ts';
import type {TCityName} from '../../types/city.ts';
import type {TSortName} from '../../types/sort-name.ts';


const initialState: TSiteProcess = {
  city: {
    name: CityName.Paris,
    location: CityLocations[CityName.Paris]
  },
  sorting: SortName.Popular
};

const siteProcess = createSlice({
  name: StoreNameSlice.SiteProcess,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<TCityName>) => {
      state.city = {
        name: action.payload,
        location: CityLocations[action.payload]
      };
    },
    setSorting: (state, action: PayloadAction<TSortName>) => {
      state.sorting = action.payload;
    }
  }
});


export {siteProcess};
export const {setCity, setSorting} = siteProcess.actions;
