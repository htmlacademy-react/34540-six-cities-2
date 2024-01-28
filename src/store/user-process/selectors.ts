import {AuthorizationStatus, StoreNameSlice} from '../../const.ts';
import type {TState} from '../../types/state.ts';
import type {TUser} from '../../types/user.ts';


const getAuthorizationStatus = (state: TState): AuthorizationStatus => state[StoreNameSlice.UserProcess].authorizationStatus;
const getUser = (state: TState): TUser['email'] => state[StoreNameSlice.UserProcess].user;

export {getAuthorizationStatus, getUser};
