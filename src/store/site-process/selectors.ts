import {StoreNameSlice} from '../../const.ts';
import type {TState} from '../../types/state.ts';
import type {TCity} from '../../types/city.ts';
import type {TSortName} from '../../types/sort-name.ts';


const getCity = (state: TState): TCity => state[StoreNameSlice.SiteProcess].city;
const getSorting = (state: TState): TSortName => state[StoreNameSlice.SiteProcess].sorting;


export {getCity, getSorting};
