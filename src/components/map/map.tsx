import {useRef, useEffect} from 'react';
import {Icon, Marker, PointExpression} from 'leaflet';
import type {TOffer, TOffers} from '../../types/offer.ts';
import {useMap} from '../../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';


const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_ACTIVE = 'img/pin-active.svg';
const ICON_SIZE: PointExpression = [27, 40];
const ICON_ANCHOR: PointExpression = [13, 40];

const defaultIconConfig = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

const activeIconConfig = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

type TMapProps = {
  targetCity?: TOffer | null;
  locations: TOffers;
  place?: 'cities' | 'offer';
};

const Map = ({targetCity, locations, place = 'cities'}: TMapProps) => {
  const focusCity = targetCity ? targetCity.city : locations[Math.floor((locations.length - 1) / 2)].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, focusCity);

  if (targetCity) {
    locations = [...locations, targetCity];
  }

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({id: locationId, city, location}) => {
        const {latitude: lat, longitude: lng} = location;
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

        map.fitBounds([[city.location.latitude, city.location.longitude]], {
          maxZoom: city.location.zoom
        });

        markers.push(marker);
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, locations, targetCity]);

  return <section className={`${place}__map map`} ref={mapRef}/>;
};

export {Map};
