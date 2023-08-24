import { startTransition } from 'react';
import Footer from '../../Footer';
import './Pasarela2s.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


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
                     <h3>¡Gracias por tu Compra!</h3>
                     <p>¡Felicidades!, tu pedido ya fue reservado comunícate por correo a Bell.tejidosdeamor@gmail.com para más información. </p>
                     <img src="src/img/Logocompra.png" alt="logo de compra"></img>
                     <hr/>
                     <Link className='btn' to="/tienda">Volver a la Tienda</Link>
                    </div>
                </div>
                <div className="product-side col-6">
                    <div className="content" style={{
                        position: 'absolute',
                        top: '30%',
                        left: '75%',
                        transform: 'translate(-50%, -50%)'
                    }}>Contenido centrado
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

}