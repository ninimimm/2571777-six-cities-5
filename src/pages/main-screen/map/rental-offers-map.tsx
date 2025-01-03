import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Location } from '../../../types/location.type';
import { useMap } from './use-map';

export type OffersMapProps = {
  points: [Location, boolean][];
  className: string;
};

export function RentalOffersMap({
  points,
  className,
}: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (map) {
        map.eachLayer((layer) => {
          if (layer instanceof leaflet.Marker) {
            map.removeLayer(layer);
          }
        });
        points.forEach((point) => {
          const icon = leaflet.icon({
            iconUrl: point[1] ? 'img/pin-active.svg' : 'img/pin.svg',
            iconSize: [30, 40],
            iconAnchor: [20, 40],
          });
          leaflet
            .marker(
              { lat: point[0].latitude, lng: point[0].longitude },
              { icon }
            )
            .addTo(map);
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [points, map]);

  return (
    <section
      className={className}
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </section>
  );
}
