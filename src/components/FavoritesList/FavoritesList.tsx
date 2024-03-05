import {useState, useCallback} from 'react';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import type {TOffer, TOffers} from '../../types/offer.ts';


type TFavoritesListProps = {
  groupedOffersByCity: Record<string, TOffers>;
}

const FavoritesList = ({groupedOffersByCity}: TFavoritesListProps) => {
  const [, setActiveOffer] = useState<TOffer | null>(null);

  const handleCardMouseOver = useCallback((offer: TOffer) => {
    setActiveOffer(offer);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActiveOffer(null);
  }, []);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <div className="locations__item-link">
                  <span>{city}</span>
                </div>
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
