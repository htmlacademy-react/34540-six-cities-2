import {StoreNameSlice} from '../../const.ts';
import type {TState} from '../../types/state.ts';
import type {TCity} from '../../types/city.ts';
import type {TSortName} from '../../types/sort-name.ts';


const getCity = (state: TState): TCity => state[StoreNameSlice.UserProcess].city;
const getSorting = (state: TState): TSortName => state[StoreNameSlice.UserProcess].sorting;


export {getCity, getSorting};
