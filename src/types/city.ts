import {TLocation} from './location.ts';
import {CityName} from '../const.ts';

type TCityName = keyof typeof CityName;

type TCity = {
  name: TCityName;
  location: TLocation;
}

export type {TCityName, TCity};
