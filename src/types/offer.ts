import {TCity} from './city.ts';
import {THost} from './host.ts';
import {TLocation} from './location.ts';

type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: THost;
  images?: string[];
  maxAdults?: number;
}

type TOffers = TOffer[];

export type {TOffers};
