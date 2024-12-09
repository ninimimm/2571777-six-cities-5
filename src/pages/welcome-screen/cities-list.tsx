import {useAppDispatch} from '../../hooks';
import {changeCities} from '../../store/action.ts';
import { City } from '../../models/index.js';


type CitiesListProps = {
  cities: City[];
};

export default function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const callbackCitiesChange = (values: City[]) => {
    dispatch(changeCities(values));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={`city-${city.id}`}
          className="locations__item"
          onClick={() => callbackCitiesChange(cities)}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
