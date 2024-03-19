import {STARS_COUNT, MONTHS} from './const.ts';
import type {TOffer, TOffers} from './types/offer.ts';
import type {TCityNames} from './types/city.ts';


const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * Math.round(rating)) / STARS_COUNT;

const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${MONTHS[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

const getNearbyOffersbyActiveOffer = (offers: TOffers, targetOffer: TOffer) => {
  const nearbyOffers = offers.filter((offer) => offer.id !== targetOffer.id);

  return nearbyOffers.slice(0, Math.min(offers.length, 3));
};

const getRandomCityName = (cityNames: TCityNames) => {
  const cityNamesArray = Object.values(cityNames);

  return cityNamesArray[Math.floor(Math.random() * cityNamesArray.length)];
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
  getNearbyOffersbyActiveOffer,
  getRandomCityName,
  sortingFilters
};
