import React, { useState } from 'react';
import AlertPaginaEnConstruccion from './AlertPaginaEnConstruccion';
import { ContenidoDeCarrito } from '../../../pages/Carrito/ContenidoDeCarrito'
import Footer from '../../Footer'
import NavBar from '../../NavBar'
import Formulario from './Formulario'
import './Pasarela1s.scss'

export const Pasarela1 = () => {
    const [mostrarAlert, setMostrarAlert] = useState(false);


    const mostrarAlerta = () => {
      setMostrarAlert(true);
    };
    return <div>
        <NavBar></NavBar>
        <div className="container-fluid">
            <div className="row">

                <div className="form-side col-6 ">

                    <Formulario></Formulario>

                </div>
                <div className="product-side  col-6">

                    <ContenidoDeCarrito></ContenidoDeCarrito>

                </div>

            </div>

        </div>
        <Footer />
        {mostrarAlerta && <AlertPaginaEnConstruccion />}
    </div>
} 