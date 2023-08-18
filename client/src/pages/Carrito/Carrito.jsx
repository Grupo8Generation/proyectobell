import { Card } from "@mui/material";
import Footer from "../../componentes/Footer";
import NavBar from "../../componentes/NavBar";
import Navbar2 from "../../componentes/Navbar2";
import CarritoContenido from "./CarritoContenido";
import CarruselCarrito from "./CarruselCarrito"
import CardContainer from "../../CardContainer";




function Carrito() {
  return<>
  <div>
    <NavBar/>
  <Navbar2/>
  </div>

  <CarritoContenido/>
  <CardContainer></CardContainer>

<CarruselCarrito/>
  <Footer/>
  </>

}

export default Carrito;

