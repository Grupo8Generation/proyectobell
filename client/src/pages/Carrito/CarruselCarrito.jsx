import React from "react";
import Cardfija from "../../componentes/CardFijas/Cardfija"
import CardFija1 from "../../componentes/CardFijas/CardFija1"
import CardFija2 from "../../componentes/CardFijas/CardFija2"
import CardFija3 from "../../componentes/CardFijas/CardFija3"
import CardFija4 from "../../componentes/CardFijas/CardFija4"
import CardFija5 from "../../componentes/CardFijas/CardFija5"
import CardFija6 from "../../componentes/CardFijas/CardFija6"
import CardFija7 from "../../componentes/CardFijas/CardFija7"
import CardFija8 from "../../componentes/CardFijas/CardFija8"
import "./CarruselCarritos.css"

// Importa tu componente de tarjeta

const CarruselCarrito = () => {
  return (
    <div className="container">
      <p className="SugCarr">Sugeridos</p>
      <p className="BasCarr">Basado en tus preferencias</p>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between m-5">
            <Cardfija></Cardfija>
              <CardFija1/>
              <CardFija2 />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between m-5">
              <CardFija3/>
              <CardFija4/>
              <CardFija5/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between m-5">
              <CardFija6/>
              <CardFija7/>
              <CardFija8/>
            </div>
          </div> 
          {/* Agrega más carousel-items según sea necesario */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarruselCarrito;
