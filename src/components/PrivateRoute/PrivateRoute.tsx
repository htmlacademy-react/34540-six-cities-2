import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';


type TPrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: TPrivateRouteProps) => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  console.log(authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};

export {PrivateRoute};
