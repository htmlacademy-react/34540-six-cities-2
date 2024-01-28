import {combineReducers} from '@reduxjs/toolkit';
import {siteData} from './site-data/site-data.ts';
import {siteProcess} from './site-process/site-process.ts';
import {userProcess} from './user-process/user-process.ts';
import {StoreNameSlice} from '../const.ts';


const rootReducer = combineReducers({
  [StoreNameSlice.SiteData]: siteData.reducer,
  [StoreNameSlice.SiteProcess]: siteProcess.reducer,
  [StoreNameSlice.UserProcess]: userProcess.reducer,
});

export {rootReducer};
