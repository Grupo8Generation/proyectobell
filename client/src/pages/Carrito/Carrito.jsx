import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import CarruselCarrito from "./CarruselCarrito";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

function Carrito() {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  const handleImpresion = () => {
    window.print();
  }

  return (
    <>
      <NavBar />
      <h2 className="titulo-principal" style={{ paddingLeft: '25px', backgroundColor: '#F9EAEA', paddingRight: '100px' }}>
        Carrito de compras
      </h2>
      <main style={{ padding: '50px' }}>
        <div className="contenedor-carrito">
          {listaCompras.length === 0 ? (
            <p className="carrito-vacio">
              Tu carrito está vacío. <i style={{ paddingLeft: '10px' }} className="bi bi-emoji-frown"></i>
            </p>
          ) : (
            <div className="contenedor-productos" style={{ maxWidth: '800px' }}>
              {listaCompras.map(item => (
                <div className="producto d-flex justify-content-between" key={item.id} 
                    style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '10px' }}>
                  
                  {/* Imagen del producto */}
                  <img src={item.imagenUrl} alt={item.nombre} width="100" height="100" style={{ marginRight: '15px' }} />

                  <div>
                      <p><strong>Nombre:</strong> {item.nombre}</p>
                      <p><strong>Precio:</strong> ${item.precio}</p>
                      <p><strong>Cantidad:</strong> {item.cantidad}</p>
                  </div>

                  <div className="d-flex flex-column align-items-end">
                      <button type="button" className="btn" onClick={() => eliminarCompra(item.id)} 
                          style={{ backgroundColor: 'transparent', border: 'none', marginBottom: '10px' }}>
                          <i className="bi bi-trash-fill"></i>
                      </button>
                      <div>
                          <button className="btn btn-outline" onClick={() => disminuirCantidad(item.id)}>-</button>
                          <button className="btn ">{item.cantidad}</button>
                          <button className="btn btn-outline" onClick={() => aumentarCantidad(item.id)}>+</button>
                      </div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '20px' }}>
                <strong>TOTAL:</strong> ${calcularTotal()}
              </div>
            </div>
          )}
          <div className="d-grid gap-2">
            <button className="btn" onClick={handleImpresion} disabled={listaCompras.length < 1}>COMPRAR</button>
          </div>
        </div>
      </main>
      <CarruselCarrito />
      <Footer />
    </>
  );
}  
export default Carrito;
