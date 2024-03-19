import {render, screen} from '@testing-library/react';
import {NoPlaces} from './NoPlaces.tsx';
import {CityName} from '../../const.ts';
import type {TCity} from '../../types/city.ts';


describe('Component: NoPlaces', () => {
  const city: TCity = {
    name: CityName.Cologne,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  };

  it('should render correct', () => {
    const expectedText = /No places to stay available/i;

    render(<NoPlaces activeCity={city}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
