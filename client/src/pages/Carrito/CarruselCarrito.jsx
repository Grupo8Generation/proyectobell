import React from "react";
import Card from "./CardsFijas/Card";
import CardFija1 from "./CardsFijas/CardFija1";
import CardFija2 from "./CardsFijas/CardFija2";
import CardFija4 from "./CardsFijas/CardFija4";
import CardFija3 from "./CardsFijas/CardFija3";
import CardFija5 from "./CardsFijas/CardFija5";
import CardFija6 from "./CardsFijas/CardFija6";
import CardFija7 from "./CardsFijas/CardFija7";
import CardFija8 from "./CardsFijas/CardFija8";
// Importa tu componente de tarjeta

const CarruselCarrito = () => {
  return (
    <div className="container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between m-5">
              <Card/>
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
              <CardFija7 />
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
