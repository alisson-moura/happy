import React from 'react';
import { Link } from 'react-router-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import mapIcon from '../utils/mapIcon';
import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São José do Rio Preto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
      center={[-20.8138504,-49.3735181]}
      zoom={15}
      style={{width:'100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>     
        <Marker position={[-20.8138504,-49.3735181]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
            Lar das Meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
        </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"/> 
      </Link>
    </div>
  );
}
export default OrphanagesMap;