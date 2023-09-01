import './Cards.css'
import girasolImage from "./BeLLImg600/Frame32.png"
import { Link } from 'react-router-dom';
import React from 'react';

const CardFija4 = () => {


  return <>
    <div className="card">
      <div>
        <img src={girasolImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div className="barra-horizontal"></div>
        <h6 className="card-hashtag"> #Personalizado</h6>
        <h5 className="card-title">Flores GIRASOL</h5>
        <h3 className="card-text"><strong>$6.000 c/u</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija4;

