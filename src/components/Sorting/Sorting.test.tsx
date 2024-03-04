import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Sorting} from './Sorting.tsx';
import {SortName} from '../../const.ts';


describe('Component: Bookmark', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it('should render correct', () => {
    render(
      <Provider store={store}>
        <Sorting
          onChange={() => {}}
          activeSorting={SortName.Popular}
        />
      </Provider>
    );

    expect(screen.getByText(SortName.Popular)).toBeInTheDocument();
  });
});
