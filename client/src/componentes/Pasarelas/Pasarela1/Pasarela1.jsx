import Footer from '../../Footer'
import Breadcrumb from './Breadcrumb'
import { Formulario } from './Formulario/Formulario'
import './Pasarela1s.css'

export const Pasarela1 = () => {
    return <div>
        <div className="container-fluid">
            <div className="row">
             
                <div className="form-side col-6 ">
                   
                    <Formulario />
                </div>

                <div className="product-side col-6"></div>
            </div>

        </div>
        <Footer />
    </div>
} 