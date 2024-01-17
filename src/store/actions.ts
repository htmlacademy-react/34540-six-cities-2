import type {AxiosInstance, AxiosError} from 'axios';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {TCityName} from '../types/city.ts';
import type {TOffer, TOffers} from '../types/offer.ts';
import type {TSortName} from '../types/sort-name.ts';
import type {TUser, TUserAuth} from '../types/user.ts';
import type {TCommentAuth, TComments} from '../types/comment.ts';
import {ApiRoute, AppRoute, StoreNameSpace} from '../const.ts';
import {saveToken} from '../services/token.ts';


const setCity = createAction<TCityName>(`${StoreNameSpace.City}/setCity`);
const setSorting = createAction<TSortName>(`${StoreNameSpace.Sort}/setSorting`);

const fetchOffers = createAsyncThunk<TOffers, undefined, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchOffers`, async (_, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TOffers>(ApiRoute.Offers);

  return data;
});

const fetchOffer = createAsyncThunk<TOffer, TOffer['id'], { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchOffer`, async (id, thunkAPI) => {
  const axios = thunkAPI.extra;

  try {
    const {data} = await axios.get<TOffer>(`${ApiRoute.Offers}/${id}`);

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;


    if (axiosError.response?.status === 404) {
      history.pushState('', '', AppRoute.NotFound);
    }

    return Promise.reject(error);
  }
});

const fetchComments = createAsyncThunk<TComments, TOffer['id'], { extra: AxiosInstance }>
(`${StoreNameSpace.Comments}/fetchComments`, async (id, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TComments>(`${ApiRoute.Comments}/${id}`);

  return data;
});

const postComment = createAsyncThunk<TComments, TCommentAuth, { extra: AxiosInstance }>
(`${StoreNameSpace.Comments}/postComment`, async ({id, comment, rating}, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.post<TComments>(`${ApiRoute.Comments}/${id}`, {comment, rating});

  return data;
});

const fetchNearbyOffers = createAsyncThunk<TOffers, TOffer['id'], { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchNearbyOffers`, async (id, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TOffers>(`${ApiRoute.Offers}/${id}/nearby`);

  return data;
});

const fetchUserStatus = createAsyncThunk<TUser['email'], undefined, { extra: AxiosInstance }>
(`${StoreNameSpace.User}/fetchUserStatus`, async (_, {extra: api}) => {
  const {data} = await api.get<TUser>(ApiRoute.Login);

  return data.email;
});

const loginUser = createAsyncThunk<TUserAuth['email'], TUserAuth, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/login`, async ({email, password}, {extra: api}) => {
  const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
  const {token} = data;

  saveToken(token);
  window.history.back();

  return email;
});

export {
  setCity,
  setSorting,
  fetchOffers,
  fetchOffer,
  fetchComments,
  postComment,
  fetchNearbyOffers,
  fetchUserStatus,
  loginUser
};
