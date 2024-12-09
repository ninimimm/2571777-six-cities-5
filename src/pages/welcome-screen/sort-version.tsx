import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortingType } from '../../store/action';
import { SortTypes } from '../const';

type SortVersionProps = {
  type: SortTypes;
  callback: () => void;
}

export function SortVersion({ type, callback }: SortVersionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector((state) => state.sortingType);
  return(
    <li className={`places__option${type === currentType ? ' places__option--active' : ''}`} tabIndex={0} onClick={
      () => {
        dispatch(setSortingType(type));
        callback();
      }
    }
    >{type}
    </li>);
}
