import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

type TPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: TPrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export {PrivateRoute};
