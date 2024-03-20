import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Review} from './review.tsx';


describe('Component: review', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with reviewer info', () => {
    render(
      <Provider store={store}>
        <Review
          id={'1'}
          date={'03-04-2024'}
          user={{
            name: 'Igor Khripunov',
            avatarUrl: 'https://media.licdn.com/dms/image/C4E03AQE7TVdC-gKGbQ/profile-displayphoto-shrink_800_800/0/1657608709458?e=1715212800&v=beta&t=LuYj8n4a0j3pVJvXt3RkkCQa982EANGvfKHxVKjkg08',
            isPro: true
          }}
          comment={'Test comment'}
          rating={4}
        />
      </Provider>
    );

    expect(screen.getByText('Igor Khripunov')).toBeInTheDocument();
    expect(screen.getByText('Test comment')).toBeInTheDocument();
  });
});
