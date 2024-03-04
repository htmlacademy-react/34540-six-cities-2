import {render, screen} from '@testing-library/react';
import {City} from './City.tsx';
import {CityName} from '../../const.ts';


describe('Component: City', () => {
  it('should render correct with a city name', () => {
    const expectedText = new RegExp(CityName.Amsterdam);

    render(
      <City
        key={CityName.Amsterdam}
        name={CityName.Amsterdam}
        isActive={false}
        onCityClick={() => {}}
      />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
