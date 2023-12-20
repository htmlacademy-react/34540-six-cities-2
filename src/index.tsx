import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import {App} from './App.tsx';
import {offers} from './mocks/offers.ts';
import {comments} from './mocks/comments.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>
);
