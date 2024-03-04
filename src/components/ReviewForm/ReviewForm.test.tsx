import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {ReviewForm} from './ReviewForm.tsx';


describe('Component: ReviewForm', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with a className equal to the "reviews__form"', () => {
    const expectedClassName = 'reviews__form';

    const {container} = render(
      <Provider store={store}>
        <ReviewForm onSubmit={() => {}}/>
      </Provider>
    );

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
