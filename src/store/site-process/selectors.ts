import {StoreNameSlice} from '../../const.ts';
import type {TCity} from '../../types/city.ts';
import type {TSortName} from '../../types/sort-name.ts';
import type {TStateReducer} from '../../types/state.ts';


const getCity = (state: TStateReducer): TCity => state[StoreNameSlice.SiteProcess].city;
const getSorting = (state: TStateReducer): TSortName => state[StoreNameSlice.SiteProcess].sorting;


export {getCity, getSorting};
