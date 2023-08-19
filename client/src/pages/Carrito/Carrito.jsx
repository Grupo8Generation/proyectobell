
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import CarruselCarrito from "./CarruselCarrito"
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";





function Carrito() {
  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return <>
    <div>
      <NavBar />
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>

            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>
                <button className="btn btn-outline" onClick={() => disminuirCantidad(item.id)}>-</button>
              <button className="btn ">{item.cantidad}</button>
              <button className="btn btn-outline" onClick={() => aumentarCantidad(item.id)}>+</button>
                </td>
                <td><button
                  type="button" className="btn btn-danger" 
                  onClick={() => eliminarCompra(item.id)} >Eliminar</button></td>
              </tr>

            ))
          }

        </tbody>
      </table>
      <div class="d-grid gap-2">
        <button className=" btn ">COMPRAR</button>
      </div>
    </div>



    <CarruselCarrito />
    <Footer />
  </>

}

export default Carrito;

