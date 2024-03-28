import {userProcess} from './user-process.ts';
import {StoreNameSlice, AuthorizationStatus} from '../../const.ts';
import {fetchUserStatus, loginUser} from '../actions.ts';


const TEST_EMAIL = 'igor.khripunov@mail.ru';

describe(`Reducer: ${StoreNameSlice.UserProcess}`, () => {
  it('should return initial state without additional parameters ', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        user: ''
      });
  });

  it('should fetch authorization status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: ''
    };

    expect(userProcess.reducer(state, {type: fetchUserStatus.rejected.type}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: ''
      });

    expect(userProcess.reducer(state, {type: fetchUserStatus.fulfilled.type, payload: TEST_EMAIL}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: TEST_EMAIL
      });
  });

  it('should login user', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: ''
    };

    expect(userProcess.reducer(state, {type: loginUser.fulfilled.type, payload: TEST_EMAIL}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: TEST_EMAIL
      });
  });
});
