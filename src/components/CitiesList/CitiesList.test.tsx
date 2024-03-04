import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {CitiesList} from './CitiesList.tsx';


describe('Component: CitiesList', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with a className equal to the "locations__list"', () => {
    const expectedClassName = 'locations__list';

    const {container} = render(
      <Provider store={store}>
        <CitiesList/>
      </Provider>
    );

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
