import type {TCityName} from '../../types/city.ts';
import {City} from '../City/City.tsx';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {setCity} from '../../store/actions.ts';
import {CityName} from '../../const.ts';

const CitiesList = () => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleCityClick = (name: TCityName) => {
    dispatch(setCity(name));
  };

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
