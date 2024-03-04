import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api.ts';
import {ApiRoute} from '../const.ts';
import {fetchUserStatus} from './actions.ts';
import type {Action} from 'redux';
import type {TStateReducer} from '../types/state.ts';
import type {History} from 'history';
import type {AxiosInstance} from 'axios';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument({api: {...mockAPI, ...mockAPI}})];

  const mockStore = configureMockStore<
    TStateReducer,
    Action,
    ThunkDispatch<TStateReducer, { api: AxiosInstance; history: History }, Action>
  >(middlewares);

  it('fetchUserStatus should be fullfilled when server returns 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Login)
      .reply(200, {});
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchUserStatus());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchUserStatus.pending.type,
      fetchUserStatus.fulfilled.type
    ]);
  });

  it('fetchUserStatus should be rejected when server returns 401', async () => {
    const store = mockStore();

    mockAPI
      .onGet(ApiRoute.Login)
      .reply(401, {});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchUserStatus());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchUserStatus.pending.type,
      fetchUserStatus.rejected.type
    ]);
  });
});
