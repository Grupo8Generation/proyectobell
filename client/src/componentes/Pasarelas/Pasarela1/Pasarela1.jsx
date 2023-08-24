
import Footer from '../../Footer'
import Formulario from './Formulario'
import './Pasarela1s.scss'

export const Pasarela1 = () => {
    
    return <div>
        <div className="container-fluid">
            <div className="row">
             
                <div className="form-side col-6 ">
                   
                  <Formulario></Formulario>
                  <div className="d-grid gap-2">
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