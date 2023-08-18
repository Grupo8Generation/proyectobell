import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="card-container">
        {products.map(product => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imagenUrl} />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>Precio: {product.precio}</Card.Text>
              {/* Agrega más elementos según las propiedades que quieras mostrar */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Productos;
