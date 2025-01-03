import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setSortingType } from '../../../store/action';
import { SortTypes } from '../../const';

type SortVersionProps = {
  type: SortTypes;
  onClickCallback: () => void;
};

function SortVersion({ type, onClickCallback }: SortVersionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector((state) => state.sortingType);
  const handleOnClick = useCallback(() => {
    dispatch(setSortingType(type));
    onClickCallback();
  }, [onClickCallback, dispatch, type]);
  return (
    <li
      className={`places__option${
        type === currentType ? ' places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={handleOnClick}
    >
      {type}
    </li>
  );
}
export const MemoizedSortVersion = memo(SortVersion);
