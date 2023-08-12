import './NavBars.css'
import { Link, NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge'; // Importa el componente Badge de Material-UI
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CarritoButton from '../pages/Carrito/CarritoButton';



const NavBar = () => {
    return (
        <div>

            <nav id="menu" className="navbar navbar-expand-lg align-items-center justify-content-center ">

                <img src='src/img/Frame_15-removebg-preview.png' alt="LogoBell"></img>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
                        <li className="nav-item">
                            <NavLink className="nav-link NosLink" to='/home' >Nosotros</NavLink>
                        </li>
                        <li className="nav-item text-pink">
                            <a className="nav-link " href="#Hashtagss">Pedido personalizado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Envíos</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/pasarela' className="nav-link " >Preguntas frecuentes</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to='/tienda' className="nav-link" >Tienda</NavLink>
                        </li>
                     <li className='nav-item'> 
                     <CarritoButton/>
                    </li>  
                    </ul>



                </div>


            </nav>


        </div>
    )
}
export default NavBar; 