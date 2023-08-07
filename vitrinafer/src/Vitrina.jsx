import React, { useState, useEffect } from 'react';
import Filtro from "./componentes/Filtro";
import CardVitrina from "./componentes/CardVitrina"
import Footer from "./componentes/Footer"
import './styles.css';

const Vitrina = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
<div>
      <Filtro onCategoryChange={handleCategoryChange} />
      <CardVitrina selectedCategory={selectedCategory} />
      <Footer/>
    </div>

  );
}

export default Vitrina; 

