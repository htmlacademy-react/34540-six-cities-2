import {render, screen} from '@testing-library/react';
import {NoPlaces} from './NoPlaces.tsx';


describe('Component: NoPlaces', () => {
  it('should render correct', () => {
    const expectedText = /No places to stay available/i;

    render(<NoPlaces/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
