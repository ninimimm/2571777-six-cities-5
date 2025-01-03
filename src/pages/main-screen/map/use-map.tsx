import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { MapAttribution, MapUrlTemplate } from '../../const';

export function useMap(mapRef: RefObject<HTMLElement>): leaflet.Map | null {
  const city = useAppSelector((state) => state.city);
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current || '', {
        center: {
          lat: city?.location.latitude,
          lng: city?.location.longitude,
        },
        zoom: city?.location.zoom,
      });

      leaflet
        .tileLayer(MapUrlTemplate, {
          attribution: MapAttribution,
        })
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    } else if (map && city) {
      map.setView(
        new leaflet.LatLng(city.location.latitude, city.location.longitude),
        city.location.zoom
      );
    }
  }, [mapRef, city, map]);

  return map;
}
