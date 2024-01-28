import {useState, memo} from 'react';
import {SortName} from '../../const.ts';
import type {TSortName} from '../../types/sort-name.ts';
import classNames from 'classnames';


type TSortingProps = {
  onChange: (name: TSortName) => void;
  activeSorting: TSortName;
};

const Sorting = memo(({onChange, activeSorting}: TSortingProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleSortItemClick = (sortName: TSortName) => {
    setIsOpened(false);
    onChange(sortName);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleButtonClick}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {isOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(SortName) as [TSortName, SortName][]).map(([name, title]) => (
            <li
              key={name}
              className={classNames('places__option', {'places__option--active': name === activeSorting})}
              onClick={() => handleSortItemClick(name)}
              tabIndex={0}
            >
              {title}
            </li>
          ))}
        </ul>}
    </form>
  );
});

export {Sorting};
