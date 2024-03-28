import {render} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {CitiesList} from './cities-list.tsx';
import {createAPI} from '../../services/api.ts';
import thunk from 'redux-thunk';
import {CityLocations, CityName, SortName, StoreNameSlice} from '../../const.ts';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';


const api = createAPI();
const middlewares = [thunk.withExtraArgument({api})];

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  [StoreNameSlice.SiteProcess]: {
    sorting: SortName.Popular,
    city: {
      name: CityName.Paris,
      location: CityLocations[CityName.Paris]
    }
  },
});

describe('Component: CitiesList', () => {


  it('should render correct with a className equal to the "locations__list"', () => {
    const expectedClassName = 'locations__list';

    const {container} = render(
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <CitiesList/>
        </HistoryRouter>
      </Provider>
    );

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
