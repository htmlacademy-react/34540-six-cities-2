import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import type {TOffer, TOffers} from '../../types/offer.ts';
import {useMap} from '../../hooks/use-map.ts';
import 'leaflet/dist/leaflet.css';


const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_ACTIVE = 'img/pin-active.svg';

const defaultIconConfig = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 40],
  iconAnchor: [13, 40]
});

const activeIconConfig = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 40],
  iconAnchor: [13, 40]
});

type TMapProps = {
  targetCity?: TOffer;
  locations: TOffers;
  place?: 'cities' | 'offer';
};

function Map({targetCity, locations, place = 'cities'}: TMapProps) {
  const focusCity = targetCity ? targetCity.city : locations[Math.floor((locations.length - 1) / 2)].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, focusCity);

  if (targetCity) {
    locations = [...locations, targetCity];
  }

  useEffect(() => {
    if (map) {
      locations.forEach(({id: locationId, city}) => {
        const {latitude: lat, longitude: lng} = city.location;
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(
            targetCity && locationId === targetCity.id
              ? activeIconConfig
              : defaultIconConfig
          )
          .addTo(map);
      });
    }
  }, [map, locations, targetCity]);

  return <section className={`${place}__map map`} ref={mapRef}/>;
}

export {Map};
