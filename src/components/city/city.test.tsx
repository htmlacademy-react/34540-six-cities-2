import {render, screen} from '@testing-library/react';
import {City} from './city.tsx';
import {CityName} from '../../const.ts';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';


describe('Component: City', () => {
  it('should render correct with a city name', () => {
    const expectedText = new RegExp(CityName.Amsterdam);

    render(
      <HistoryRouter history={browserHistory}>
        <City
          key={CityName.Amsterdam}
          name={CityName.Amsterdam}
          isActive={false}
          onCityClick={() => true}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
