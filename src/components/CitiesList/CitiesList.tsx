import {useCallback} from 'react';
import {City} from '../City/City.tsx';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {setCity} from '../../store/site-process/site-process.ts';
import {CityName} from '../../const.ts';
import type {TCityName} from '../../types/city.ts';
import {getCity} from '../../store/site-process/selectors.ts';


const CitiesList = () => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);


  const handleCityClick = useCallback((name: TCityName) => {
    dispatch(setCity(name));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((city) => (
        <City
          key={city}
          name={city}
          isActive={city === activeCity.name}
          onCityClick={handleCityClick}
        />
      ))}
    </ul>
  );
};

export {CitiesList};
