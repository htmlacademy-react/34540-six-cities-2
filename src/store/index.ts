import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';


const store = configureStore({reducer});

export {store};
