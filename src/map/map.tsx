import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../pages/const.js';
import { City } from '../models';
import useMap from './useMap';

export type MapProps = {
  cities: City[];
  className: string;
};

export function Map({ cities, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cities.forEach((city) => {
        leaflet
          .marker(
            {
              lat: city.coordinate.latitude,
              lng: city.coordinate.longitude,
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, cities, defaultCustomIcon]);

  return <section className={className} style={{ height: '500px' }} ref={mapRef}></section>;
}
