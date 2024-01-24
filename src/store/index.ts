import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer.ts';
import {createAPI} from '../services/api.ts';


const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    },
  })
});

export {store};
