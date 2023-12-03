import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {TCity} from '../../types/city.ts';
import {useMap} from '../../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';


const URL_MARKER_DEFAULT = 'img/pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 40],
  iconAnchor: [13, 40]
});

type TMapProps = {
  cities: TCity[];
};

function Map({cities}: TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities[0]);

  useEffect(() => {
    if (map) {
      cities.forEach((city) => {
        const {latitude: lat, longitude: lng} = city.location;
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, cities]);

  return <section className="cities__map map" ref={mapRef}/>;
}

export {Map};
