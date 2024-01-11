import type {AxiosInstance} from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {TCityName} from '../types/city.ts';
import type {TOffers} from '../types/offer.ts';
import type {TSortName} from '../types/sort-name.ts';
import type {TUser, TUserAuth} from '../types/user.ts';
import {ApiRoute, StoreNameSpace} from '../const.ts';
import {Token} from '../services/token.ts';


const setCity = createAction<TCityName>(`${StoreNameSpace.City}/setCity`);
const setSorting = createAction<TSortName>(`${StoreNameSpace.Sort}/setSorting`);

const fetchOffers = createAsyncThunk<TOffers, undefined, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchOffers`, async (_, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TOffers>(ApiRoute.Offers);

  return data;
});

const fetchUserStatus = createAsyncThunk<TUser, undefined, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchUserStatus`, async (_, {extra: api}) => {
  const {data} = await api.get<TUser>(ApiRoute.Login);

  return data;
});

const loginUser = createAsyncThunk<TUserAuth['email'], TUserAuth, { extra: AxiosInstance }>(
  `${StoreNameSpace.Offers}/login`,
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    window.history.back();

    return email;
  });

export {
  setCity,
  setSorting,
  fetchOffers,
  fetchUserStatus,
  loginUser
};
