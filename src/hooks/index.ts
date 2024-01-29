import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {TAppDispatch} from '../types/state.ts';
import type {TStateReducer} from '../types/state.ts';


const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TStateReducer> = useSelector;

export {useAppDispatch, useAppSelector};
