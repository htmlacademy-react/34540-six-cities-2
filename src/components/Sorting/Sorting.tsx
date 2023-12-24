import {useState} from 'react';
import {SortName} from '../../const.ts';
import type {TSortName} from '../../types/sort-name.ts';


type TSortingProps = {
  onChange: (name: TSortName) => void;
  activeSorting: TSortName;
};

const Sorting = ({onChange, activeSorting}: TSortingProps) => {
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
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
      </span>
      {isOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(SortName) as [TSortName, SortName][]).map(([name, title]) => (
            <li
              key={name}
              className="places__option"
              onClick={() => handleSortItemClick(name)}
              tabIndex={0}
            >
              {title}
            </li>
          ))}
        </ul>}
    </form>
  )
};

export {Sorting};
