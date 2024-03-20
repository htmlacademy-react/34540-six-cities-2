import {render, screen} from '@testing-library/react';
import {FavoritesListEmpty} from './favorites-list-empty.tsx';


describe('Component: favorites-list-empty', () => {
  it('should render correct', () => {
    const expectedText = /Nothing yet saved/i;

    render(<FavoritesListEmpty/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
