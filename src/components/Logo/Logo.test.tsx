import {render, screen} from '@testing-library/react';
import {Logo} from './Logo.tsx';
import {HistoryRouter} from '../HistoryRouter/HistoryRouter.tsx';
import {browserHistory} from '../../browser-history.ts';


describe('Component: Logo', () => {
  it('should render correct', () => {
    const expectedAltText = /6 cities logo/i;

    render(
      <HistoryRouter history={browserHistory}>
        <Logo/>
      </HistoryRouter>
    );

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
