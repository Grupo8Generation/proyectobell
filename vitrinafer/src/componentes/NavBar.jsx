import './NavBars.css'
import { Link, NavLink } from 'react-router-dom';
import Head from './Head'


const NavBar = () => {
    return(
    <div>

        <nav id="menu" className="navbar navbar-expand-lg align-items-center justify-content-center ">

            <img src='src/img/Frame_15-removebg-preview.png' alt="LogoBell"></img>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/home' >Nosotros</NavLink>
                    </li>
                    <li className="nav-item text-pink">
                        <a className="nav-link " href="#Hashtagss">Pedido personalizado</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Envíos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Preguntas frecuentes</a>
                    </li>

                    <li className="nav-item">
                    <NavLink to='/Vitrina'className="nav-link" >Tienda</NavLink>
                    </li>

                    <button id="btnCarrito" className="btn" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="32" fill="currentColor"
                            className="bi bi-cart2" viewBox="0 0 16 16">
                            <path
                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    </button>
                </ul>
            </div>
        </nav>
    </div>
)
}
export default NavBar; 