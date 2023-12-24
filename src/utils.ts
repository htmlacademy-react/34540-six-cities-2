import {STARS_COUNT, MONTHS, SortName} from './const.ts';
import type {TOffer, TOffers} from './types/offer.ts';
import type {TState} from './types/state.ts';
import type {TSortName} from './types/sort-name.ts';


const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * rating) / STARS_COUNT;

const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${MONTHS[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

const getOffersByCity = (state: TState) => state.offers.filter((offer: TOffer) => offer.city.name === state.city.name);

const getNearbyOffers = (offers: TOffers, targetOffer: TOffer, amount = 3) => {
  const nearbyOffers = offers.filter((offer) => offer.id !== targetOffer.id);
  amount = offers.length < 3 ? offers.length : amount;

  return nearbyOffers.slice(0, amount);
};

const sorting: {
  [key in TSortName]: (a: TOffer, b: TOffer) => number
} = {
  [SortName.Popular]: () => 0,
  [SortName.PriceIncrease]: (a, b) => a.price - b.price,
  [SortName.PriceDecrease]: (a, b) => b.price - a.price,
  [SortName.TopRated]: (a, b) => b.rating - a.rating,
};

export {
  capitalizeFirstLetter,
  calculateRatingPercentages,
  formatDate,
  getOffersByCity,
  getNearbyOffers,
  sorting
};
