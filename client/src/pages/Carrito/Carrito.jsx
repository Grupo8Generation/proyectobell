import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import CarruselCarrito from "./CarruselCarrito";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import Navbar3 from '../../pages/Carrito/Navbar3';
import "./Carrito.css"
function Carrito() {
    const navigate = useNavigate();
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);

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

    return (
        <>
            <NavBar></NavBar>
            <div className="container-fluid text-center tienda h1">
            Carrito de Compras
        </div>
            <Navbar3></Navbar3>
            <h2 className="titulo-principal " >
                Tus productos seleccionados
            </h2>
            <main style={{ padding: '50px' }}>
                <div className="contenedor-carrito">
                    {listaCompras.length === 0 ? (
                        <p className="carrito-vacio">Tu carrito está vacío. <i style={{ paddingLeft: '10px' }} className="bi bi-emoji-frown"></i></p>
                    ) : (
                        <div className="contenedor-productos" style={{ maxWidth: '800px' }}>
                            {listaCompras.map(item => (
                                <div className="producto d-flex justify-content-between" key={item.id}
                                    style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '10px' }}>
                                    <img src={item.imagenUrl} alt={item.nombre} width="100" height="100" style={{ marginRight: '15px' }} />
                                    <div>
                                        <p><strong>Nombre:</strong> {item.nombre}</p>
                                        <p><strong>Precio:</strong> ${item.precio}</p>
                                        <p><strong>Cantidad:</strong> {item.cantidad}</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        <button type="button" className="btn botonEliminar" onClick={() => eliminarCompra(item.id)}
                                            style={{ backgroundColor: 'transparent', border: 'none', marginBottom: '10px' }}>
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                        <div>
                                            <button className="btn btn-outline" onClick={() => disminuirCantidad(item.id)}>-</button>
                                            <button className="btn botonDeEnMedio ">{item.cantidad}</button>
                                            <button className="btn btn-outline" onClick={() => aumentarCantidad(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='container-fluid totalBoton'>
                            <div className='totalCarritoti' >
                                <strong>TOTAL:</strong> ${calcularTotal()}
                            </div>
                            <button className="btn botonComprarCar" onClick={handleCompra} disabled={listaCompras.length < 1}>COMPRAR</button>
                            <Link className="btn botonComprarCar" to="/tienda" >Ir a tienda</Link>
                        </div>
                        </div>
                    )}
                    <div className="">
                        
                    </div>
                    <div></div>
                </div>
            </main>
            <hr />
            <CarruselCarrito />
           
            <Footer />
        </>
    );
}
export default Carrito;
