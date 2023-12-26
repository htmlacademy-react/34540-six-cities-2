import {createAction} from '@reduxjs/toolkit';
import type {TCityName} from '../types/city.ts';
import type {TOffers} from '../types/offer.ts';
import type {TSortName} from '../types/sort-name.ts';
import {StoreNameSpace} from '../const.ts';


const setCity = createAction<TCityName>(`${StoreNameSpace.City}/setCity`);
const setOffers = createAction<TOffers>(`${StoreNameSpace.Offers}/setOffers`);
const setSorting = createAction<TSortName>(`${StoreNameSpace.Sort}/setSorting`);

export {setCity, setOffers, setSorting};
