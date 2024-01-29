import {AuthorizationStatus, StoreNameSlice} from '../../const.ts';
import type {TUser} from '../../types/user.ts';
import type {TStateReducer} from '../../types/state.ts';


const getAuthorizationStatus = (state: TStateReducer): AuthorizationStatus => state[StoreNameSlice.UserProcess].authorizationStatus;
const getUser = (state: TStateReducer): TUser['email'] => state[StoreNameSlice.UserProcess].user;


export {getAuthorizationStatus, getUser};
