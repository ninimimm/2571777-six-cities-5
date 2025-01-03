import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.ts';
import { changeCity } from '../../../store/action.ts';
import { City } from '../../../types/city.type.ts';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const allCities = offers.map((offer) => offer.city);
  const cities = allCities
    .filter(
      (someCity, i, arr) =>
        arr.findIndex((anotherCity) => anotherCity.name === someCity.name) === i
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  const handleCityChange = useCallback(
    (city: City) => {
      dispatch(changeCity(city));
    },
    [dispatch]
  );
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={`city-${city.name}`}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);
export default MemoizedCitiesList;
