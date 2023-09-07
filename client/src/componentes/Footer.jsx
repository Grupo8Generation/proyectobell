import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footers.css';
import logoFooter from "./Home/img2/bell_logo_redondo.png"
const Footer = () => {
  return (
    <div className="container-fluid contFoo">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
         <NavLink className="nav-link" to='/home'> <img
            src={logoFooter}
            alt="Logo"
            width="158"
            height="158"
            className="px-1 py-1"
          ></img></NavLink>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
          <ul className="list-unstyled mb-0">
            <li>
              <NavLink to="/" className="LinkLegal">
                Nosotros
              </NavLink>
            </li>
            <li>
              <Link to="/pedido-personalizado" className="bottom-bar-link">
                Pedido personalizado
              </Link>
            </li>
            <li>
              <Link to="/envios" className="bottom-bar-link">
                Envíos
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
          <ul className="list-unstyled mb-0">
            <li>
              <Link to="/preguntas-frecuentes" className="bottom-bar-link">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link to="/aspectos-legales" className="LinkLegal">
                Legal
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12 bottom-bar-section">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="bottom-bar-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="bottom-bar-link">
                Tienda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
