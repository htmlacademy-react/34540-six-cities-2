import {useState, useCallback, MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import {setCity} from '../../store/site-process/site-process.ts';
import {useAppDispatch} from '../../hooks';
import {AppRoute} from '../../const.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TCityName} from '../../types/city.ts';


type TFavoritesListProps = {
  groupedOffersByCity: Record<string, TOffers>;
}

const FavoritesList = ({groupedOffersByCity}: TFavoritesListProps) => {
  const dispatch = useAppDispatch();

  const [, setActiveOffer] = useState<TOffer | null>(null);

  const handleCardMouseOver = useCallback((offer: TOffer) => {
    setActiveOffer(offer);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActiveOffer(null);
  }, []);

  const handleLocationClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    const cityName = evt.currentTarget.textContent as TCityName;
    dispatch(setCity(cityName));
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" onClick={handleLocationClick} to={AppRoute.Root}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {groupedOffers.map((offer) => (
                <PlaceCard
                  key={offer.id}
                  offer={offer}
                  place='favorites'
                  onMouseOver={handleCardMouseOver}
                  onMouseLeave={handleCardMouseLeave}
                />)
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export {FavoritesList};
