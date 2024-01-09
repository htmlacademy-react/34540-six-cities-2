import type {AxiosInstance} from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {TCityName} from '../types/city.ts';
import type {TOffers} from '../types/offer.ts';
import type {TSortName} from '../types/sort-name.ts';
import {ApiRoute, StoreNameSpace} from '../const.ts';


const setCity = createAction<TCityName>(`${StoreNameSpace.City}/setCity`);
const setOffers = createAction<TOffers>(`${StoreNameSpace.Offers}/setOffers`);
const setSorting = createAction<TSortName>(`${StoreNameSpace.Sort}/setSorting`);

const fetchOffers = createAsyncThunk(`${StoreNameSpace.Offers}/fetchOffers`, async (_, thunkAPI) => {
  const axios = thunkAPI.extra as AxiosInstance;
  const {data} = await axios.get<TOffers>(ApiRoute.Offers);

  return data;
});

export {
  setCity,
  setOffers,
  setSorting,
  fetchOffers
};
