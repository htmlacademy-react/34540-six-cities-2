import {Link} from 'react-router-dom';
import {Logo} from '../logo/logo.tsx';
import {AppRoute, AuthorizationStatus} from '../../const';
import {dropToken} from '../../services/token.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors.ts';
import {logoutUser} from '../../store/user-process/user-process.ts';
import {clearFavoriteOffers} from '../../store/site-data/site-data.ts';
import {getFavoriteOffers} from '../../store/site-data/selectors.ts';


const Header = () => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleLoginClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dropToken();
      dispatch(logoutUser());
      dispatch(clearFavoriteOffers());
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus !== AuthorizationStatus.Auth && (
                <li className="header__nav-item user">
                  <Link className="header__nav-link" to={AppRoute.Login} onClick={handleLoginClick}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
              {authorizationStatus === AuthorizationStatus.Auth && (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{user}</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login} onClick={handleLoginClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export {Header};
