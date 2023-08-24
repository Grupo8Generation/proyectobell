import React from "react";
import { NavLink } from "react-router-dom";
import './CarritoContenido.css'

function CarritoContenido(){
    return ( 
<div className="container-fluid carrito-contenido">
   
<div>
     
       <NavLink className="nav-link NosLink" to='/carrito' >Ver Carrito</NavLink>
    </div>
     
    


</div>



)}


export default CarritoContenido; 