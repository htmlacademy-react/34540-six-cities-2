import type {TOffer} from './offer.ts';


type TFavorite = Pick<TOffer, 'id'> & { status: 1 | 0 }


export type {TFavorite};
