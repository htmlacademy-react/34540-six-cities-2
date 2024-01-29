import {memo} from 'react';
import {Link} from 'react-router-dom';
import type {TCityName} from '../../types/city.ts';
import classNames from 'classnames';


type TCityProps = {
  name: TCityName;
  isActive: boolean;
  onCityClick: (name: TCityName) => void;
}

const City = memo(({name, isActive, onCityClick}: TCityProps) => {
  const handleCityClick = () => {
    onCityClick(name);
  };

  return (
    <li className="locations__item" onClick={handleCityClick}>
      <Link
        to="/"
        className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': isActive})}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
});

City.displayName = 'City';


export {City};
