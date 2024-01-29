import {CityName} from '../const.ts';
import type {TLocation} from './location.ts';


type TCityName = keyof typeof CityName;

type TCity = {
  name: TCityName;
  location: TLocation;
}


export type {TCityName, TCity};
