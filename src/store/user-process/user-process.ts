import {createSlice} from '@reduxjs/toolkit';
import {fetchUserStatus, loginUser} from '../actions.ts';
import {AuthorizationStatus, StoreNameSlice} from '../../const.ts';
import type {TUserProcess} from '../../types/state.ts';


const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: ''
};

const userProcess = createSlice({
  name: StoreNameSlice.UserProcess,
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = '';
    }
  },
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


export {userProcess};
export const {logoutUser} = userProcess.actions;
