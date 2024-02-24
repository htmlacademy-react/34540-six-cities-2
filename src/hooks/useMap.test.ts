import {renderHook} from '@testing-library/react';
import {Map} from 'leaflet';

import {CityName, CityLocations} from '../const.ts';
import {useMap} from './useMap.ts';


const city = {
  name: CityName.Amsterdam,
  location: CityLocations[CityName.Amsterdam]
};

const ref = {
  current: document.createElement('div')
};

describe('Hook: useMap', () => {
  it('should return map', () => {
    const {result} = renderHook(() =>
      useMap(ref, city),
    );

    const map = result.current;

    expect(map).toBeInstanceOf(Map);
  });
});
