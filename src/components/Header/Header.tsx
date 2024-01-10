import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {Logo} from '../../components/Logo/Logo.tsx';


const Header = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      igor.khripunov@mail.ru
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>)}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span
                    className="header__signout">
                    {authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export {Header};
