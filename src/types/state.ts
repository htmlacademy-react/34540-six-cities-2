import {store} from '../store';
import type {TCity} from './city.ts';
import type {TOffers} from './offer.ts';


type TState = {
  city: TCity,
  offers: TOffers
}

type TAppDispatch = typeof store.dispatch;

export type {TState, TAppDispatch};
