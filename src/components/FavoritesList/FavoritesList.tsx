import {useState} from 'react';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import type {TOffer, TOffers} from '../../types/offer.ts';


type TFavoritesListProps = {
  groupedOffersByCity: {
    [key: string]: TOffers;
  };
}

const FavoritesList = ({groupedOffersByCity}: TFavoritesListProps) => {
  const [, setActiveOffer] = useState<TOffer | null>(null);
  const handleCardMouseOver = (offer: TOffer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
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
