import {STARS_COUNT} from './const.ts';

const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * rating) / STARS_COUNT;

export {capitalizeFirstLetter, calculateRatingPercentages};
