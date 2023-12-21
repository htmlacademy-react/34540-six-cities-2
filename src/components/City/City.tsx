import {Link} from 'react-router-dom';
import type {TCityName} from '../../types/city.ts';


type TCityProps = {
  name: TCityName,
  isActive: boolean;
  onCityClick: (name: TCityName) => void;
}

const City = ({name, isActive, onCityClick}: TCityProps) => {
  const handleCityClick = () => {
    onCityClick(name);
  };

  return (
    <li className="locations__item" onClick={handleCityClick}>
      <Link
        to="/"
        className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
};

export {City};
