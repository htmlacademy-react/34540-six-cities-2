import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Bookmark} from './Bookmark.tsx';


describe('Component: Bookmark', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

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
