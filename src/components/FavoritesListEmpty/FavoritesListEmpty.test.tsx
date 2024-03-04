import {render, screen} from '@testing-library/react';
import {FavoritesListEmpty} from './FavoritesListEmpty.tsx';


describe('Component: FavoritesListEmpty', () => {
  it('should render correct', () => {
    const expectedText = /Nothing yet saved/i;

    render(<FavoritesListEmpty/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
