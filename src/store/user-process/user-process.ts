import {createSlice} from '@reduxjs/toolkit';
import {fetchUserStatus, loginUser} from '../actions.ts';
import {AuthorizationStatus, StoreNameSlice} from '../../const.ts';
import type {TUserProcess} from '../../types/state.ts';


const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: ''
};

export const userProcess = createSlice({
  name: StoreNameSlice.UserProcess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.user = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  }
});
