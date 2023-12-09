import {STARS_COUNT, MONTHS} from './const.ts';

const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
  + text.slice(1);

const calculateRatingPercentages = (rating: number) => (100 * rating) / STARS_COUNT;

const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${MONTHS[dateParsed.getMonth()]} ${dateParsed.getFullYear()}`;
};

export {
  capitalizeFirstLetter,
  calculateRatingPercentages,
  formatDate
};
