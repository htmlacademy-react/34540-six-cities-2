import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Header} from './Header.tsx';


describe('Component: Header', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct with a className equal to the "header__wrapper"', () => {
    const expectedClassName = 'header__wrapper';

    const {container} = render(
      <Provider store={store}>
        <Header/>
      </Provider>
    );

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
