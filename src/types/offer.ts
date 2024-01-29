import type {TCity} from './city.ts';
import type {THost} from './host.ts';
import type {TLocation} from './location.ts';


type TOffer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
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


export type {TOffer, TOffers};
