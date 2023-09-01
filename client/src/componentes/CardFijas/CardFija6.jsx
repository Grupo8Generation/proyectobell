import './Cards.css'
import cha3dImage from "./BeLLImg600/Frame26.png"
import { Link } from 'react-router-dom';
import React from 'react';

const CardFija6 = () => {


  return <>
    <div className="card">
      <div>
        <img src={cha3dImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div className="barra-horizontal"></div>
        <h6 className="card-hashtag"> #Personalizado</h6>
        <h5 className="card-title">Chaleco 3d</h5>
        <h3 className="card-text"><strong>$20.000</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija6;

