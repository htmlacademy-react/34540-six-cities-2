import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {ReviewList} from './ReviewList.tsx';
import {AuthorizationStatus} from '../../const.ts';
import type {TComments} from '../../types/comment.ts';


const comments: TComments = [{
  id: '123312',
  date: '04-03-2024',
  user: {
    name: 'Igor Khripunov',
    avatarUrl: 'https://media.licdn.com/dms/image/C4E03AQE7TVdC-gKGbQ/profile-displayphoto-shrink_800_800/0/1657608709458?e=1715212800&v=beta&t=LuYj8n4a0j3pVJvXt3RkkCQa982EANGvfKHxVKjkg08',
    isPro: true
  },
  comment: 'Test comment',
  rating: 5
}];

describe('Component: ReviewList', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with reviews info', () => {
    render(
      <Provider store={store}>
        <ReviewList
          comments={comments}
          authorizationStatus={AuthorizationStatus.Auth}
          onSubmit={() => {}}
        />
      </Provider>
    );

    expect(screen.getByText(`Reviews · ${comments.length}`)).toBeInTheDocument();
  });
});
