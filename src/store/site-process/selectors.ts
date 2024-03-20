import {StoreNameSlice} from '../../const.ts';
import type {TCity} from '../../types/city.ts';
import type {TStateReducer} from '../../types/state.ts';


const getCity = (state: TStateReducer): TCity => state[StoreNameSlice.SiteProcess].city;


export {getCity};
