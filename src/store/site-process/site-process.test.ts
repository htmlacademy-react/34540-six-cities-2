import {siteProcess, setCity, setSorting} from './site-process.ts';
import {StoreNameSlice, CityName, CityLocations, SortName} from '../../const.ts';
import type {TSortName} from '../../types/sort-name.ts';


describe(`Reducer: ${StoreNameSlice.SiteProcess}`, () => {
  it('should return initial state without additional parameters', () => {
    expect(siteProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        city: {
          name: CityName.Paris,
          location: CityLocations[CityName.Paris]
        },
        sorting: SortName.Popular
      });
  });

  it('should set city by a given name', () => {
    const state = {
      city: {
        name: CityName.Paris,
        location: CityLocations[CityName.Paris]
      },
      sorting: SortName.Popular as TSortName
    };

    expect(siteProcess.reducer(state, setCity(CityName.Amsterdam)))
      .toEqual({
        city: {
          name: CityName.Amsterdam,
          location: CityLocations[CityName.Amsterdam]
        },
        sorting: SortName.Popular
      });
  });

  it('should set "sorting" by a given name', () => {
    const state = {
      city: {
        name: CityName.Paris,
        location: CityLocations[CityName.Paris]
      },
      sorting: SortName.Popular as TSortName
    };

    expect(siteProcess.reducer(state, setSorting(Object.keys(SortName)[1] as TSortName)))
      .toEqual({
        city: {
          name: CityName.Paris,
          location: CityLocations[CityName.Paris]
        },
        sorting: Object.keys(SortName)[1]
      });
  });
});
