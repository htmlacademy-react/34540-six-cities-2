import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

const Setting = {
  PacesCount: 3
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Setting.PacesCount}/>
  </React.StrictMode>
);
