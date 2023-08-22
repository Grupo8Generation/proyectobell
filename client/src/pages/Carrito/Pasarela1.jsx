import { useLocation } from "react-router-dom";
import Footer from "../../componentes/Footer";


function Pasarela1()  {

    const location = useLocation();
    console.log('location.state', location.state);
let productosEnCarrito = [];

    if (location.state && location.state.productosEnCarrito) {
     productosEnCarrito = location.state ? location.state.productosEnCarrito : [];
    console.log('ProductosEnCarritopasarela1', productosEnCarrito);
    } else{
        console.log("No hay productos en el carrito")
    }

    return (
        <div>
            <div className="container-fluid">
                        <div>{productosEnCarrito.map(producto => (
                                console.log("Productos:", producto),
                                <div key={producto.id}>
                                    <p><strong>Nombre:</strong> {producto.nombre}</p>
                                    <p><strong>Precio:</strong> ${producto.precio}</p>
                                    <p><strong>Cantidad:</strong> {producto.cantidad}</p>
                                    
                                </div>
                                
                            ))}
                      
                    
                </div>
                <Footer />
            </div>
           <div/> 
           </div>)}

export default Pasarela1;