
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import CarruselCarrito from "./CarruselCarrito"
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";





function Carrito() {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)
Mauricio-BackEnd

  const calcularTotal = () => {
    return listaCompras.reduce((total,item) => total + item.precio * item.cantidad, 0)
  }
  const handleImpresion = () =>{

    window.print()

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0 ).toFixed(2)
}

const handleImpresion = () => {
 main

    print()
}
  return <>
    <div>
      <NavBar />
    </div>
    <div>
      <table className="table">
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
 Mauricio-BackEnd
          <th><b>TOTAL: </b></th>
          <td></td>
          <td></td>          
          <td>${calcularTotal()}</td>

           <th><b>TOTAL: </b></th>
                    <td></td>
                    <td>{calcularTotal()}</td>
 main


        </tbody>
      </table>
 Mauricio-BackEnd
      <div className="d-grid gap-2">
        <button 
        className=" btn "
        onClick={handleImpresion}
        disabled={listaCompras.length<1}>COMPRAR</button>

      <div className="d-grid gap-2">
        <button className=" btn "
         onClick={handleImpresion}
         disabled={listaCompras<1}
         >COMPRAR</button>
 main
      </div>
    </div>



    <CarruselCarrito />
    <Footer />
  </>

}

export default Carrito;

