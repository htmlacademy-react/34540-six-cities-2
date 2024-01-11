import {store} from '../store';
import {AuthorizationStatus} from '../const.ts';
import type {TCity} from './city.ts';
import type {TOffers} from './offer.ts';
import type {TSortName} from './sort-name.ts';
import type {TUser} from './user.ts';


type TState = {
  city: TCity;
  offers: TOffers;
  isOffersLoading: boolean;
  sorting: TSortName;
  authorizationStatus: AuthorizationStatus;
  user: TUser['email'];
}

type TAppDispatch = typeof store.dispatch;

export type {TState, TAppDispatch};
