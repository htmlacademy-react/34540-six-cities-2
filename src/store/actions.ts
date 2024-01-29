import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiRoute, AppRoute, HttpCode, StoreNameSpace} from '../const.ts';
import {saveToken} from '../services/token.ts';
import type {TOffer, TOffers} from '../types/offer.ts';
import type {TFavorite} from '../types/favorite.ts';
import type {TUser, TUserAuth} from '../types/user.ts';
import type {TCommentAuth, TComment, TComments} from '../types/comment.ts';


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
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpCode.NotFound) {
        history.pushState('', '', AppRoute.NotFound);
      }
    }

    return Promise.reject(error);
  }
});

const fetchNearbyOffers = createAsyncThunk<TOffers, TOffer['id'], { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchNearbyOffers`, async (id, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TOffers>(`${ApiRoute.Offers}/${id}/nearby`);

  return data;
});

const fetchFavoriteOffers = createAsyncThunk<TOffers, undefined, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/fetchFavoriteOffers`, async (_, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.get<TOffers>(ApiRoute.Favorite);

  return data;
});

const postFavorite = createAsyncThunk<TOffer, TFavorite, { extra: AxiosInstance }>
(`${StoreNameSpace.Offers}/postFavoriteOffer`, async ({id, status}, thunkAPI) => {
  const axios = thunkAPI.extra;

  try {
    const {data} = await axios.post<TOffer>(`${ApiRoute.Favorite}/${id}/${status}`);

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpCode.NoAuth) {
        history.pushState('', '', AppRoute.Login);
      }
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

const postComment = createAsyncThunk<TComment, TCommentAuth, { extra: AxiosInstance }>
(`${StoreNameSpace.Comments}/postComment`, async ({id, comment, rating}, thunkAPI) => {
  const axios = thunkAPI.extra;
  const {data} = await axios.post<TComment>(`${ApiRoute.Comments}/${id}`, {comment, rating});

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
  fetchOffers,
  fetchOffer,
  fetchFavoriteOffers,
  postFavorite,
  fetchComments,
  postComment,
  fetchNearbyOffers,
  fetchUserStatus,
  loginUser
};
