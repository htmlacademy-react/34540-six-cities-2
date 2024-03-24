import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Bookmark} from './bookmark.tsx';
import type {TUser} from '../../types/user.ts';
import {createAPI} from '../../services/api.ts';
import thunk from 'redux-thunk';
import {AuthorizationStatus, StoreNameSlice} from '../../const.ts';


const user: TUser = {
  token: '1',
  name: 'Igor',
  avatarUrl: 'https://13.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
  email: 'igor.khripunov@mail.ru'
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument({api})];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.UserProcess]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: user.email
  },
});


describe('Component: Bookmark', () => {
  it('should render correct', () => {
    const expectedText = /bookmarks/i;

    render(
      <Provider store={store}>
        <Bookmark
          id='1'
          isActive={Boolean(true)}
          place={'place-card'}
        />
      </Provider>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
