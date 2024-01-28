import {Navigate} from 'react-router-dom';
import {Spinner} from '../Spinner/Spinner.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';


type TPrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: TPrivateRouteProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};


export {PrivateRoute};
