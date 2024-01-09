import {store} from '../store';
import type {TCity} from './city.ts';
import type {TOffers} from './offer.ts';
import type {TSortName} from './sort-name.ts';


type TState = {
  city: TCity;
  offers: TOffers;
  isOffersLoading: boolean;
  sorting: TSortName;
}

type TAppDispatch = typeof store.dispatch;

export type {TState, TAppDispatch};
