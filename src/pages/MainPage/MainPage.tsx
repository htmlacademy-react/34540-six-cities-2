import {Logo} from '../../components/Logo/Logo.tsx';
import {CitiesList} from '../../components/CitiesList/CitiesList.tsx';
import {NoPlaces} from '../../components/NoPlaces/NoPlaces.tsx';
import {PlaceCardList} from '../../components/PlaceCardList/PlaceCardList.tsx';
import {useAppSelector} from '../../hooks';


const MainPage = () => {
  const offersByCity = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name));
  const activeCity = useAppSelector((state) => state.city);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      igor.khripunov@mail.ru
                  </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index${offersByCity.length ? '' : ' page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        {!offersByCity.length ? <NoPlaces/> :
          <PlaceCardList
            activeCity={activeCity}
            offers={offersByCity}
          />
        }
      </main>
    </div>
  )
};

export {MainPage};
