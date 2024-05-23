// src/Card.js
import React from 'react';
import bootstrap from './../node_modules/bootstrap/dist/css/bootstrap.css'
import Watch from './fancy.webp';
import Braclet from './braclet.webp';
import Bappa from './bappa.jpeg';
import Bag from './bag.jpg';
import './card.css';


function Card(title) {
  return (
      <div className="card">

        <img src={title.src} className="card-image" />

        <div className="card-content">
          <h2 className="card-title">{title.user}</h2>
          <p className="card-text">{title.name}</p>
          <p className="card-text">{title.prize}</p>
        </div>
      </div>
      
    
  );
};
export default Card;

