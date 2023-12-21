import {useState} from 'react';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import {Map} from '../Map/Map.tsx';
import type {TCity} from "../../types/city.ts";
import type {TOffers} from '../../types/offer.ts';


type TPlaceCardListProps = {
  activeCity: TCity
  offers: TOffers
}

const PlaceCardList = ({activeCity, offers}: TPlaceCardListProps) => {
  const [, setActiveOffer] = useState(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} {offers.length ? 'place' : 'places'} places to
            stay in {activeCity.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map locations={offers}/>
        </div>
      </div>
    </div>
  );
};

export {PlaceCardList};