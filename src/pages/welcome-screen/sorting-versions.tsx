import { useState } from 'react';
import { SortTypes } from '../const';
import { useAppSelector } from '../../hooks';
import { SortVersion } from './sort-version.js';

export function SortingVariables(): JSX.Element {
  const sortVersion = useAppSelector((state) => state.sortingType);
  const [isOpened, setIsOpened] = useState(false);
  const onClick = () => setIsOpened(!isOpened);
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={onClick}>Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onClick}>
        {sortVersion}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpened ? ' places__options--opened' : ''}`}>
        {Object.values(SortTypes).map((type) => <SortVersion type={type} key={type} callback={onClick}/>)}
      </ul>
    </form>);
}
