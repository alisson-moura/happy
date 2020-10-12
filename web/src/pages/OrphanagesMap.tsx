import React from 'react';
import { Link } from 'react-router-dom'
import {Map, TileLayer} from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

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
        </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/> 
      </Link>
    </div>
  );
}
export default OrphanagesMap;