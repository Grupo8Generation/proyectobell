import React from "react";
import Card from "./CardsFijas/Card";
// Importa tu componente de tarjeta

const CarruselCarrito = () => {
  return (
    <div className="container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between m-5">
              <Card/>
              <Card />
              <Card />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between m-5">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between m-5">
              <Card />
              <Card />
              <Card />
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
