import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext';

export const ContenidoDeCarrito = () => {

    const { listaCompras } = useContext(CarritoContext);

  
  return( 
    <>{listaCompras.map(item => (
    <div className="producto d-flex justify-content-between" key={item.id} 
        style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '10px' }}>
      
      {/* Imagen del producto */}
      <img src={item.imagenUrl} alt={item.nombre} width="100" height="100" style={{ marginRight: '15px' }} />

      <div>
          <p><strong>Nombre:</strong> {item.nombre}</p>
          <p><strong>Precio:</strong> ${item.precio}</p>
          <p><strong>Cantidad:</strong> {item.cantidad}</p>
      </div>

    </div>
  ))}
    
 </>) 
} 
