import {useState} from 'react';
import {PlaceCard} from '../PlaceCard/PlaceCard.tsx';
import {Map} from '../Map/Map.tsx';
import {Sorting} from '../Sorting/Sorting.tsx';
import type {TCity} from '../../types/city.ts';
import type {TOffers} from '../../types/offer.ts';
import type {TSortName} from '../../types/sort-name.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setSorting} from '../../store/actions.ts';


type TPlaceCardListProps = {
  activeCity: TCity;
  offers: TOffers;
}

const PlaceCardList = ({activeCity, offers}: TPlaceCardListProps) => {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const [, setActiveOffer] = useState(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
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
