import {STARS_COUNT, MONTHS} from './const.ts';
import type {TOffer, TOffers} from './types/offer.ts';

const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * rating) / STARS_COUNT;

const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${MONTHS[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

const getNearbyOffers = (offers: TOffers, targetOffer: TOffer, amount = 3) => {
  let nearbyOffers = offers.filter((offer) => offer.id !== targetOffer.id);
  amount = offers.length < 3 ? offers.length : amount;

  return nearbyOffers.slice(0, amount);
};

export {
  capitalizeFirstLetter,
  calculateRatingPercentages,
  formatDate,
  getNearbyOffers
};
