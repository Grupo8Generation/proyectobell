
import { Link } from 'react-router-dom';
import CardFija2 from '../CardFijas/CardFija2';
import CardFija3 from '../CardFijas/CardFija3';
import CardFija4 from '../CardFijas/CardFija4';
import "./MasVendidos.css";
import fondo_cards from "./img2/fondo_cards.svg"


const MasVendido = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${fondo_cards})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };


    return <div className='container-fluid LosMas'style={backgroundImageStyle}>
        <h1 className="text-center">Los más vendidos</h1>
       <h3> <Link to="/tienda">Ver más</Link></h3>
        <div className="row rowMas justify-content-around ">
        <div className="col-sm-4 col-md-3 mb-4">
          <CardFija2/>
        </div>
        <div className="col-sm-4 col-md-3 mb-4">
          <CardFija4 />
        </div>
        <div className="col-sm-4 col-md-3 mb-4">
          <CardFija3 />
        </div>
        </div>
    </div>

}

export default MasVendido;

/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el archivo CSS de Bootstrap
import CardFija2 from './CardFija2'; // Importar tus componentes CardFija2, CardFija3, y CardFija4
import CardFija3 from './CardFija3';
import CardFija4 from './CardFija4';

const MasVendido = () => {
  return (
    <div className='container-fluid LosMas'>
      <h1 className="text-center">Los más vendidos</h1>
      <h3 className="text-center"><a href="https://www.ejemplo.com">Ver todo</a></h3>
      <div className="d-flex flex-wrap justify-content-center m-3 px-3">
        <CardFija2 className="mb-3 mx-2" />
        <CardFija4 className="mb-3 mx-2" />
        <CardFija3 className="mb-3 mx-2" />
      </div>
    </div>
  );
}

export default MasVendido;*/
