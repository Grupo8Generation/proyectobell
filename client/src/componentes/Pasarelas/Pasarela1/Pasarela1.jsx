

import Footer from '../../Footer'

import Formulario from './Formulario'
import './Pasarela1s.scss'

export const Pasarela1 = () => {
    return <div>
        <div className="container-fluid">
            <div className="row">
             
                <div className="form-side col-6 ">
                   
                  <Formulario></Formulario>
                </div>

                <div className="product-side col-6"></div>
         
            </div>

        </div>
        <Footer />
    </div>
} 