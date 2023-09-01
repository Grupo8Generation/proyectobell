import './Cards.css'
import amigurumiconejitoImage from "../CardFijas/BeLLImg600/amigurumiconejito.jpg"
import { Link } from 'react-router-dom';
import React from 'react';

const Card = () => {


  return <>
    <div className="card">
      <div>
        <img src={amigurumiconejitoImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div className="barra-horizontal"></div>
        <h6 className="card-hashtag"> #Cascabel</h6>
        <h5 className="card-title">Cascabel de Conejito</h5>
        <h3 className="card-text"><strong>$18.000</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}



export default Card;