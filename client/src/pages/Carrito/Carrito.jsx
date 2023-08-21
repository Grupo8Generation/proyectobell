import { Card } from "@mui/material";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import Navbar2 from "../../componentes/Navbar2";
import CarritoContenido from "./CarritoContenido";
import CarruselCarrito from "./CarruselCarrito"





function Carrito() {
  return<>
  <div>
    <NavBar/>
  <Navbar2/>
  </div>

  <CarritoContenido/>
  

<CarruselCarrito/>
  <Footer/>
  </>

}

export default Carrito;

