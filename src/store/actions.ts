import {createAction} from '@reduxjs/toolkit';
import type {TCityName} from '../types/city.ts';
import type {TOffers} from '../types/offer.ts';
import {NameSpace} from '../const.ts';

const setCity = createAction<TCityName>(`${NameSpace.City}/setCity`);
const setOffers = createAction<TOffers>(`${NameSpace.Offers}/setOffers`);

export {setCity, setOffers};
