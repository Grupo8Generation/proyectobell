import React, { useState } from 'react';
import './Filtro.css';

const Filtro = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Llama a la función pasada como prop con la categoría seleccionada
  };
    return (
<div className="container-fluid" style= {{textAlign: 'center', padding: '15px'}}> Tienda 
<ul className="nav" style={{margin: '15px', padding_top:'20px'}}>
    <li className="nav-item">
    <button className="nav-link active" onClick={() => handleCategoryClick('accesorios')}>
            accesorios
          </button>
    </li>
    <li className="nav-item">
    <button className="nav-link" onClick={() => handleCategoryClick('niños & niñas')}>
            niños & niñas
          </button>
        <p className="text"style={{margin:'-20px', margin_left:'40px'}}><small>Chalecos</small></p>
    </li>
    <li className="nav-item">
    <button className="nav-link" onClick={() => handleCategoryClick('adultos')}>
            adultos
          </button>
      <p className="text"style={{margin:'-20px', margin_left: '25px'}}><small>Chalecos</small></p>
    </li>
    <li className="nav-item">
    <button className="nav-link" onClick={() => handleCategoryClick('amigurumis')}> amigurumis
            <amigurumis></amigurumis>
          </button>
        <p className="text"style={{margin:'-20px', margin_left: '30px'}}><small>de Bebé</small></p>
    </li>
    <li className="nav-item">
    <button className="nav-link" onClick={() => handleCategoryClick('zapatitos')}>
           zapatitos
          </button>
        <p className="text"style={{margin:'-20px', margin_left: '20px'}}><small>para Bebés</small></p>
    </li>
    <li className="nav-item">
    <button className="nav-link" onClick={() => handleCategoryClick('otros')}> otros
            <otros></otros>
          </button>
    </li>
  </ul>
  </div>
  

);
}
export default Filtro;