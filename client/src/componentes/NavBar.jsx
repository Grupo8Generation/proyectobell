import './NavBars.css'
import { Link, NavLink } from 'react-router-dom';
import CarritoButton from '../pages/Carrito/CarritoButton';
import logo_redondo from "./Home/img2/bell_logo_redondo.png"


const NavBar = () => {
    return (
        <div className='container-fluid'>

            <nav id="menu" className="navbar navbar-expand-lg custom-navbar-bg">
                <div className='container-fluid'>
                    <NavLink  to='/home'>
                    <img src={logo_redondo} alt="LogoBell" className='logoNavbar'></img></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse custom-navbar-bg" id="navbarSupportedContent">
                        <div className="collapse navbar-collapse custom-navbar-bg" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
                                <li className="nav-item">
                                    <NavLink className="nav-link NosLink" to='/home' >Nosotros</NavLink>
                                </li>
                                <li className="nav-item text-pink custom-navbar-bg">
                                    <a className="nav-link "  href="https://docs.google.com/forms/d/e/1FAIpQLScIFmQgagROpAHQsdnkaSxvcXigx9UdkHgQEBUdjLb3q-7qVw/viewform" target="blank">Pedido personalizado</a>
                                </li>
                                <li className="nav-item custom-navbar-bg">
                                    <NavLink to="/pasarela" className="nav-link " href="#">Envíos</NavLink>
                                </li>
                                <li className="nav-item custom-navbar-bg">
                                    <NavLink to='/preguntasFrecuentes' className="nav-link " >Preguntas frecuentes</NavLink>
                                </li>


                                <li className="nav-item custom-navbar-bg">
                                    <NavLink to='/tienda' className="nav-link" >Tienda</NavLink>
                                </li>
                                <li className='nav-item custom-navbar-bg'>
                                    <CarritoButton />
                                </li>
                            </ul>



                        </div>

                    </div>
                   </div> 
            </nav>
        

        </div >
       
    )
}
export default NavBar; 