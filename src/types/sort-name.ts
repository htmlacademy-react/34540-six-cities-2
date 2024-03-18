import {SortName} from '../const.ts';


type TSortName = keyof typeof SortName;
type TSortNameValue = SortName;


export type {TSortName, TSortNameValue};
