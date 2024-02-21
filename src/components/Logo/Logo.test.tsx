import {render, screen} from '@testing-library/react';
import {Logo} from './Logo.tsx';


describe('Component: Logo', () => {
  it('should render correct', () => {
    const expectedAltText = /6 cities logo/i;

    render(<Logo/>);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
