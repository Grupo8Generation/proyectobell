import { startTransition } from 'react';

import './Pasarela2s.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { ContenidoDeCarrito } from '../../pages/Carrito/ContenidoDeCarrito';
import logoBell from "../../img/bell_logo_redondo.png"

export const Pasarela2 = () => {

    return <div>
        <div className="container-fluid">
            <div className="row">

                <div className="form-side col-6 ">
                    <div className='container-fluid'style={{
                        textAlign: "center",
                        top: '30%',
                        padding: "20%",
                    }}>
                         <img class="imgGracias" src={logoBell} alt="logo de compra"></img>
                        <div className='container-fluid contenidoGracias'> 
                     <p className='h3 '>¡Gracias por tu Compra!</p>
                     <p className='h5 '>¡Felicidades!, tu pedido ya fue reservado comunícate por correo a Bell.tejidosdeamor@gmail.com para más información. </p>
                    
                     <hr/>
                     <Link className='btn' to="/tienda">Volver a la Tienda</Link>
                    </div>
                </div>
                </div>



                <div className="product-side col-6">
                    <div className="content" style={{
                        
                    }}>
                    <ContenidoDeCarrito/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

}