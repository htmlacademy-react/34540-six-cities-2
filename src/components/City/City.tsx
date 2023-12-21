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
      <a className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
};

export {City};
