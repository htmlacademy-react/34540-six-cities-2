import {Helmet} from 'react-helmet-async';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Spinner} from '../../components/Spinner/Spinner.tsx';
import {Header} from '../../components/Header/Header.tsx';
import {FavoritesList} from '../../components/FavoritesList/FavoritesList.tsx';
import {FavoritesListEmpty} from '../../components/FavoritesListEmpty/FavoritesListEmpty.tsx';
import {SITE_NAME} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {getIsFavoriteOffersLoading, getFavoriteOffers} from '../../store/site-data/selectors.ts';
import type {TOffers} from '../../types/offer.ts';


const FavoritesPage = () => {
  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const groupedOffersByCity = favoriteOffers.reduce<{ [key: string]: TOffers }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  const isFavoriteOffers = Boolean(Object.keys(groupedOffersByCity).length);

  if (isFavoriteOffersLoading) {
    return <Spinner/>;
  }

  return (
    <div className={classNames('page', {'page--favorites-empty': !isFavoriteOffers})}>
      <Helmet>
        <title>{SITE_NAME}: favorites</title>
      </Helmet>

      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {!isFavoriteOffers ? <FavoritesListEmpty/> :
            <FavoritesList groupedOffersByCity={groupedOffersByCity}/>}
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
};


export {FavoritesPage};
