import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Header} from '../../components/Header/Header.tsx';
import {PlaceCard} from '../../components/PlaceCard/PlaceCard.tsx';
import type {TOffer, TOffers} from '../../types/offer.ts';
import {SITE_NAME} from '../../const.ts';
import {useAppSelector} from '../../hooks';


const FavoritesPage = () => {
  const offers: TOffers = useAppSelector((state) => state.offers);
  const [, setActiveOffer] = useState<TOffer | null>(null);

  const handleCardMouseOver = (offer: TOffer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

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
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers.map((offer) =>
                      <PlaceCard key={offer.id} offer={offer} place='favorites' onMouseOver={handleCardMouseOver} onMouseLeave={handleCardMouseLeave}/>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
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
