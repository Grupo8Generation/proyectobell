import React from "react";
import { NavLink } from "react-router-dom";
import './CarritoContenido.css'

function CarritoContenido(){
    return ( 
<div className="container carrito-contenido">
  
     <NavLink className="nav-link NosLink" to='/carrito' >Ver Carrito</NavLink>
</div>
)}


export default CarritoContenido; 