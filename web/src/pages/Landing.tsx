import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';


import '../styles/pages/landing.css';
import logoimg from '../images/logo.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoimg} alt="Happy" />
        <main>
          <h1>
            Leve felicidade para o mundo
          </h1>
          <p>
            Visite orfanatos e mude o dia de muitas crianças.
          </p>
        </main>
        <div className="location">
          <strong>São José do Rio Preto</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </div>
    </div>
  );
}