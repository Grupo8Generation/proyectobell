import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import "./ContenidoDeCarritos.css"

export const ContenidoDeCarrito = () => {

    const { listaCompras } = useContext(CarritoContext);
    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0);
    }
    const handleCompra = () => {
        if (listaCompras.length > 0) {
            navigate('/pasarela');
        } else {
            alert('Tu carrito está vacío. Agrega productos antes de comprar.');
        }
    }

  
  return( 
    <>
    <div className='container-fluid contenidoCarrito' style={{ maxHeight: '940px', overflowY: 'auto' }}>
    <p className='h2 text-center'>Tus Compras</p>
    
    
    {listaCompras.map(item => (
    <div className="productoCarr d-flex justify-content-between" key={item.id} 
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
  <div className="totalCarrito">
  <strong>TOTAL: </strong> ${calcularTotal()}
</div>
</div>
 </>) 
} 
