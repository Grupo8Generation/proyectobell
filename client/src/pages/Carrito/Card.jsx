import "./CardStyle.css"
import React, { useState } from "react";


const Card1 = ({ imagenUrl, nombre, precio, handleAgregar, handleQuitar, hanldeAumentar, handleDisminuir }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar
        setAdded(false)

    }


    return (
        <div className="card">
            <img className="card-img-top" src={imagenUrl} alt={nombre} />
            <div className="card-contenido">
                <p className=' hashtag'>#Amigurumi</p>
                <h2 className='card-nombre'>{nombre}</h2>
                <h3 className='card-precio'>{precio}</h3>
            </div>
            {
                added
                    ? <button type="button" className="boton-quitar"
                        onClick={clickQuitar}
                    >
                        Quitar del carrito
                    </button>

                    : <button type="button" className="boton-agregar"
                        onClick={clickAgregar}
                    >
                        Agregar al carrito
                    </button>
            }


        </div>
    )
}

export default Card1