import {useState, useLayoutEffect, ReactNode} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';


export interface THistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
}

const HistoryRouter = ({basename, children, history}: THistoryRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export {HistoryRouter};
