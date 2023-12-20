import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {setOffers} from './actions.ts';
import {offers} from '../mocks/offers.ts';

const store = configureStore({reducer});

store.dispatch(setOffers(offers));

export {store};
