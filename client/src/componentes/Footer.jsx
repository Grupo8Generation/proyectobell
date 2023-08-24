
import { Link, NavLink } from 'react-router-dom';
import './Footers.css';

const Footer = () => {
    return (
            <div className="container-fluid contFoo">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
                      
                        <img src="src/img/Frame_15-removebg-preview.png" alt="Logo" width="158" height="158" className='px-1 py-1'></img>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
                       
                        <ul className="list-unstyled mb-0">
                            <li><NavLink to="/" className='LinkLegal'>Nosotros</NavLink></li>
                            <li><Link className="bottom-bar-link " to="">Pedido personalizado</Link></li>
                            <li><a href="" className="bottom-bar-link"><b>Envios</b></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
            
                        <ul className="list-unstyled mb-0">
                            <li><Link to="/preguntasFrecuentes"className="bottom-bar-link"><b>Preguntas frecuentes</b></Link></li>
                            <li><Link className="LinkLegal" to="/aspectosLegales"><b>Legal</b></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
        
                        <ul className="list-unstyled mb-0">
                            <li><a href="#" className="bottom-bar-link"><b>Instagram</b></a></li>
                            <li><a href="#" className="bottom-bar-link"><b>Tienda</b></a></li>
                        </ul>
                    </div>
                
                </div>
            </div>
       
    )
}

export default Footer;
