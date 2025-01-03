import { memo, useCallback, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { SortTypes } from '../../const';
import { MemoizedSortVersion } from './sort-version';

function SortingVariables(): JSX.Element {
  const sortVersion = useAppSelector((state) => state.sortingType);
  const [isOpened, setIsOpened] = useState(false);
  const handleOnClick = useCallback(() => setIsOpened(!isOpened), [isOpened]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={handleOnClick}>
        Sort by
      </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleOnClick}
      >
        {sortVersion}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${
          isOpened ? ' places__options--opened' : ''
        }`}
      >
        {Object.values(SortTypes).map((type) => (
          <MemoizedSortVersion
            type={type}
            key={type}
            onClickCallback={handleOnClick}
          />
        ))}
      </ul>
    </form>
  );
}
export const MemoizedSortingVariables = memo(SortingVariables);
