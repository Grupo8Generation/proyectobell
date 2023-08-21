import { useContext } from "react"
import NavBar from "./NavBar"
import NavBar2 from "./Navbar2"
import Footer from "./Footer"
import Card1 from "../pages/Carrito/Card"
import "./vitrinas.css"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"


export const Vitrina = () => {

    const { productos } = useContext(ProductosContext)
    const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
    
    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }

    return <>

        <NavBar></NavBar>
        <div className="container-fluid text-center tienda h1">
            Tienda
        </div>
        <NavBar2></NavBar2>
        <div className="contenedor-vitrina">
            {productos.map(producto => (
                <Card1 key={producto.id}
                    imagenUrl={producto.imagenUrl}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                ></Card1>
            ))}
        </div>

        <Footer />
    </>
}


