import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const iconPerson = new Icon({
  iconUrl: require('./placeholder.png'),
  iconSize: [38, 38]
});

const center = [54.21133309402026, -2.830688497073126];

let crimeData = [
  {
    id: 1,
    link: 'https://www.mylondon.news/news/south-london-news/met-police-issue-kingston-incident-27884266',
    location: 'South West',
    latitude: 2.744714,
    longitude: 43.9319306,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 2,
    link: 'https://www.mylondon.news/news/north-london-news/two-men-stabbed-man-seen-27883522',
    location: 'West London',
    latitude: 38.1943567,
    longitude: -81.3686944,
    crime: 'Edgware incidents VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 3,
    link: 'https://www.mylondon.news/news/south-london-news/teenager-rushed-hospital-after-being-27882989',
    location: 'South London',
    latitude: 31.5231809,
    longitude: 34.6100421,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 4,
    link: 'https://www.mylondon.news/news/north-london-news/teenage-predator-raped-woman-sexually-27881648',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'predator VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 5,
    link: 'https://www.mylondon.news/news/south-london-news/family-man-65-retire-crushed-27880767',
    location: 'America',
    latitude: 39.7837304,
    longitude: -100.445882,
    crime: 'recycling lorry OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 6,
    link: 'https://www.mylondon.news/news/west-london-news/harrow-man-arrested-major-people-27880515',
    location: 'London',
    latitude: 51.5073359,
    longitude: -0.12765,
    crime: 'boat PERSONAL CRIMES',
    date: '2023-10-11'
  },
  {
    id: 7,
    link: 'https://www.mylondon.news/news/south-london-news/peckham-shop-owner-filmed-strangling-27879263',
    location: 'South London',
    latitude: 31.5231809,
    longitude: 34.6100421,
    crime: 'shop PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 8,
    link: 'https://www.mylondon.news/news/east-london-news/man-45-dies-after-falling-27879777',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 9,
    link: 'https://www.mylondon.news/news/south-london-news/girls-left-drown-given-black-27873805',
    location: 'London',
    latitude: 51.5073359,
    longitude: -0.12765,
    crime: 'window PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 10,
    link: 'https://www.mylondon.news/news/south-london-news/met-police-officer-put-hand-27877232',
    location: 'South London',
    latitude: 31.5231809,
    longitude: 34.6100421,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 11,
    link: 'https://www.mylondon.news/news/uk-world-news/knifeman-threatened-firebomb-home-stole-27876378',
    location: 'Derbyshire',
    latitude: 53.1185033,
    longitude: -1.5566179,
    crime: 'stole PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 12,
    link: 'https://www.mylondon.news/news/south-london-news/met-police-warn-do-not-27876153',
    location: 'South London',
    latitude: 31.5231809,
    longitude: 34.6100421,
    crime: 'stash PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 13,
    link: 'https://www.mylondon.news/news/east-london-news/east-london-man-murdered-sister-27875371',
    location: 'Ilford',
    latitude: 51.5582734,
    longitude: 0.0711669,
    crime: 'murdered VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 14,
    link: 'https://www.mylondon.news/news/east-london-news/met-police-officer-wore-sinister-27873459',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'beat VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 15,
    link: 'https://www.mylondon.news/news/north-london-news/nightmare-neighbour-shouted-wild-child-27871226',
    location: 'West Hampstead',
    latitude: 51.5468194,
    longitude: -0.1899646,
    crime: 'child abuse OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 16,
    link: 'https://www.mylondon.news/news/west-london-news/prime-suspect-suzy-lamplugh-murder-27873563',
    location: 'London',
    latitude: 51.5073359,
    longitude: -0.12765,
    crime: 'murder PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 17,
    link: 'https://www.mylondon.news/news/south-london-news/battersea-shooting-victim-21-named-27873633',
    location: 'Battersea',
    latitude: 51.4707933,
    longitude: -0.172214,
    crime: 'shooting VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 18,
    link: 'https://www.mylondon.news/news/north-london-news/arsenal-fan-wheelchair-crashed-man-27871062',
    location: 'Emirates',
    latitude: 53.8698063,
    longitude: 27.5513085,
    crime: 'game VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 19,
    link: 'https://www.mylondon.news/news/north-london-news/police-appeal-after-woman-allegedly-27867623',
    location: 'Selma',
    latitude: 32.4078632,
    longitude: -87.0207473,
    crime: 'threw racist OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 20,
    link: 'https://www.mylondon.news/news/south-london-news/grim-week-london-after-5-27867659',
    location: 'London',
    latitude: 51.5073359,
    longitude: -0.12765,
    crime: 'killed VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 21,
    link: 'https://www.mylondon.news/news/north-london-news/man-banned-driving-after-shocking-27864024',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'car PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 22,
    link: 'https://www.mylondon.news/news/uk-world-news/suella-braverman-calls-full-force-27867038',
    location: 'London',
    latitude: 51.5073359,
    longitude: -0.12765,
    crime: 'law PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 23,
    link: 'https://www.mylondon.news/news/transport/two-horses-killed-m25-hit-27866019',
    location: 'North London',
    latitude: 41.332052,
    longitude: 19.8048247,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 24,
    link: 'https://www.mylondon.news/news/north-london-news/police-hunt-after-north-london-27865972',
    location: 'North London',
    latitude: 41.332052,
    longitude: 19.8048247,
    crime: 'brawl VIOLENT CRIMES',
    date: '2023-10-11'
  },
  {
    id: 25,
    link: 'https://www.mylondon.news/news/south-london-news/brixton-locals-say-antisocial-behaviour-27884939',
    location: 'Brixton',
    latitude: 51.4568044,
    longitude: -0.1167959,
    crime: 'urine PROPERTY CRIMES',
    date: '2023-10-11'
  },
  {
    id: 26,
    link: 'https://www.mylondon.news/news/west-london-news/motorcyclist-dies-after-crashing-level-27885658',
    location: 'Staines',
    latitude: 51.434012,
    longitude: -0.511044,
    crime: 'OTHER CRIMES',
    date: '2023-10-11'
  },
  {
    id: 27,
    link: 'https://www.mylondon.news/news/south-london-news/man-charged-murder-bromley-teenager-27913123',
    location: 'Bromley',
    latitude: 51.4028046,
    longitude: 0.0148142,
    crime: 'charged with murder VIOLENT CRIMES',
    date: '2023-10-16'
  }
];

const MapComponent = () => {
  return (
    <div>
      <p>Live Crime</p>
      <h2>Crime Map</h2>
      <div>
        <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {crimeData.map((marker) => (
            <Marker position={[marker.latitude, marker.longitude]} icon={iconPerson} key={marker.id}>
              <Popup>{marker.crime}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
