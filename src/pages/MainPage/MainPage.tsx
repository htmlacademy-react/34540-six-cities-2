import {Header} from '../../components/Header/Header.tsx';
import {Spinner} from '../../components/Spinner/Spinner.tsx';
import {CitiesList} from '../../components/CitiesList/CitiesList.tsx';
import {NoPlaces} from '../../components/NoPlaces/NoPlaces.tsx';
import {PlaceCardList} from '../../components/PlaceCardList/PlaceCardList.tsx';
import {useAppSelector} from '../../hooks';
import {sortingFilters} from '../../utils.ts';
import {getIsOffersLoading, getOffersByCity} from '../../store/site-data/selectors.ts';
import {getCity} from '../../store/site-process/selectors.ts';
import {getSorting} from '../../store/site-process/selectors.ts';
import classNames from 'classnames';


const MainPage = () => {
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const activeSorting = useAppSelector(getSorting);
  const offersByCity = useAppSelector((state) => getOffersByCity(state).sort(sortingFilters[activeSorting]));
  const activeCity = useAppSelector(getCity);

  const getPlaceCardList = () => {
    if (!offersByCity.length) {
      return <NoPlaces activeCity={activeCity}/>;
    }

    return (
      <PlaceCardList
        activeCity={activeCity}
        offers={offersByCity}
      />
    );
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main
        className={classNames('page__main', 'page__main--index', {'page__main--index-empty': !offersByCity.length})}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        {isOffersLoading ? <Spinner/> : getPlaceCardList()}
      </main>
    </div>
  );
};


export {MainPage};
