import {useState} from 'react';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import {Map} from '../Map/Map.tsx';
import {Sorting} from '../Sorting/Sorting.tsx';
import type {TCity} from '../../types/city.ts';
import type {TOffer, TOffers} from '../../types/offer.ts';
import type {TSortName} from '../../types/sort-name.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setSorting} from '../../store/site-process/site-process.ts';
import {getSorting} from '../../store/site-process/selectors.ts';


type TPlaceCardListProps = {
  activeCity: TCity;
  offers: TOffers;
}

const PlaceCardList = ({activeCity, offers}: TPlaceCardListProps) => {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector(getSorting);
  const [activeOffer, setActiveOffer] = useState<TOffer | null>(null);

  const handleCardMouseOver = (offer: TOffer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (sortName: TSortName) => {
    dispatch(setSorting(sortName));
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} {offers.length ? 'place' : 'places'} places to stay in {activeCity.name}
          </b>
          <Sorting
            onChange={onSortingChange}
            activeSorting={activeSorting}
          />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                onMouseOver={handleCardMouseOver}
                onMouseLeave={handleCardMouseLeave}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map locations={offers} targetCity={activeOffer}/>
        </div>
      </div>
    </div>
  );
};

export {PlaceCardList};
