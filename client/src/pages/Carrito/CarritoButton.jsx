import { useState, useContext } from "react"; // No olvides importar useContext
import CarritoContenido from "./CarritoContenido";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CarritoContenido.css'
import './CarritoButton.css'
import { CarritoContext } from "../../context/CarritoContext";
import { ContenidoDeCarrito } from "./ContenidoDeCarrito";
import React from 'react';


function CarritoButton() {
    const { listaCompras } = useContext(CarritoContext); // Mueve esta línea aquí, dentro del componente
    const [mostrarCarrito, setMostrarCarrito] = useState(false); // corregido typo en setMostrarCarrito

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    return (
        <div className=" carrito-button">
            <button className="btn btn-outline"onClick={toggleCarrito}>
                <Badge badgeContent={listaCompras.length} color="primary">
                    <ShoppingCartIcon style={{ color: 'white' }} />
                </Badge>
            </button>
            {mostrarCarrito && <CarritoContenido></CarritoContenido> }
        </div>
    )
}

export default CarritoButton;
