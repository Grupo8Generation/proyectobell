import React from 'react'
import Navbar2 from './Navbar2'
import NavBar from '../../componentes/NavBar';
import Footer from '../../componentes/Footer';
import CarritoContenido from './CarritoContenido';





function Carrito() {
  return<>
  <div>
    <NavBar/>
  <Navbar2/>
  </div>
  <CarritoContenido/>
  <Footer/>
  </>

}

export default Carrito;