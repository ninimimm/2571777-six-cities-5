import leaflet from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { City } from '../../models';

function useMap(
  mapRef: React.MutableRefObject<HTMLLIElement | null>,
  cities: City[]
) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cities[0].coordinate.latitude,
          lng: cities[0].coordinate.longitude,
        },
        zoom: cities[0].zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cities]);

  return map;
}

export default useMap;
