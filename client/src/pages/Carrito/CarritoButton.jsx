import { useState } from "react";
import CarritoContenido from "./CarritoContenido";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CarritoContenido.css'
import './CarritoButton.css'




function CarritoButton() {
    const [mostrarCarrito, setMostratCarrito] = useState(false);

    const toggleCarrito = () =>{
        setMostratCarrito(!mostrarCarrito);
    
    };

    return (
        <div className="carrito-button">
            <button onClick={toggleCarrito}>
            <Badge badgeContent={0} color="primary">
            <ShoppingCartIcon style={{ color: 'white' }}/>
            </Badge>
            </button>
            {mostrarCarrito && <CarritoContenido/>}
        </div>
    )
}

export default CarritoButton; 