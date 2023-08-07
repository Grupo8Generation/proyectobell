import React, { useState, useEffect } from 'react';
import './CardVitrina.css';

const CardVitrina = ({ selectedCategory }) => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('./src/api.json');
      const data = await response.json();
      setOriginalProducts(data);
      setFilteredProducts(data); // Inicialmente, muestra todos los productos
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(originalProducts); // Muestra todos los productos si no hay categoría seleccionada
    } else {
      const filtered = originalProducts.filter((product) => product.categoria.nombre === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, originalProducts]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="col">
          <div className="card" style={{ width: "18rem" }}>
            <div style={{ position: 'relative' }}>
              <div className="barra-horizontal"></div>
              <div className="card-body producto-detalles">
                <h3 className="card-title producto-titulo">${product.nombre}</h3>
                <p className="card-text producto-precio"><strong>${product.precio}</strong></p>
                <p>{product.categoria.nombre}</p>
              </div>
              <div style={{ paddingBottom: "15px" }} className="mb-5 d-flex justify-content-around">
                <button className="producto-agregar" id={product.id}>Agregar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardVitrina;
