import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {Header} from '../../components/Header/Header.tsx';
import {FavoritesList} from '../../components/FavoritesList/FavoritesList.tsx';
import {FavoritesListEmpty} from '../../components/FavoritesListEmpty/FavoritesListEmpty.tsx';
import type {TOffers} from '../../types/offer.ts';
import {SITE_NAME} from '../../const.ts';
import {useAppSelector} from '../../hooks';


const FavoritesPage = () => {
  const offers: TOffers = useAppSelector((state) => state.offers);

  const groupedOffersByCity = offers.reduce<{ [key: string]: TOffers }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  return (
    <div className="page">
      <Helmet>
        <title>{SITE_NAME}: favorites</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {Object.keys(groupedOffersByCity).length === 0 ? <FavoritesListEmpty/> : <FavoritesList groupedOffersByCity={groupedOffersByCity}/>}
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
