import {render, screen} from '@testing-library/react';
import {Logo} from './logo.tsx';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';


describe('Component: logo', () => {
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
