import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSlice, CityName, CityLocations, SortName} from '../../const.ts';
import type {TSiteProcess} from '../../types/state.ts';


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
        setCity: (state, action) => {
            state.city = {
                name: action.payload,
                location: CityLocations[action.payload]
            };
        },
        setSorting: (state, action) => {
            state.sorting = action.payload;
        }
    }
});

export {siteProcess};
export const {setCity, setSorting} = siteProcess.actions;
