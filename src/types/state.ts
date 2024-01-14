import {store} from '../store';
import {AuthorizationStatus} from '../const.ts';
import type {TCity} from './city.ts';
import type {TOffer, TOffers} from './offer.ts';
import type {TSortName} from './sort-name.ts';
import type {TUser} from './user.ts';
import type {TComments} from './comment.ts';


type TState = {
  city: TCity;
  offers: TOffers;
  isOffersLoading: boolean;
  offer: TOffer | null;
  isOfferLoading: boolean;
  nearbyOffers: TOffers;
  comments: TComments;
  sorting: TSortName;
  authorizationStatus: AuthorizationStatus;
  user: TUser['email'];
}

type TAppDispatch = typeof store.dispatch;

export type {TState, TAppDispatch};
