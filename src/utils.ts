import {STARS_COUNT, MONTHS} from './const.ts';
import {StoreNameSlice} from './const.ts';
import type {TOffer, TOffers} from './types/offer.ts';
import type {TStateReducer} from './types/state.ts';


const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * rating) / STARS_COUNT;

const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${MONTHS[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

const getOffersByCity = (state: TStateReducer) => state[StoreNameSlice.SiteData].offers.filter((offer: TOffer) => offer.city.name === state[StoreNameSlice.SiteProcess].city.name);

const getNearbyOffersbyActiveOffer = (offers: TOffers, targetOffer: TOffer, amount = 3) => {
  const nearbyOffers = offers.filter((offer) => offer.id !== targetOffer.id);
  amount = offers.length < 3 ? offers.length : amount;

  return nearbyOffers.slice(0, amount);
};

const sortingFilters = {
  Popular: () => 0,
  PriceIncrease: (a: TOffer, b: TOffer) => a.price - b.price,
  PriceDecrease: (a: TOffer, b: TOffer) => b.price - a.price,
  TopRated: (a: TOffer, b: TOffer) => b.rating - a.rating,
};


export {
  capitalizeFirstLetter,
  calculateRatingPercentages,
  formatDate,
  getOffersByCity,
  getNearbyOffersbyActiveOffer,
  sortingFilters
};
