import React from "react";
import "./Navbar3.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar3 = () => {
    return (
        <div className="NavBar2 py-2">
        <ul className="nav justify-content-center">
        <li className="nav2-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/tienda"
            > Todos
            </a>
          </li>
          <li className="nav2-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/tienda"
            > Amigurumis
            </a>
          </li>
          <li className="nav2-item">
            <a
              className="nav-link d-flex flex-column align-items-center text-center"
              href="/tienda"
            >
              Niños & Niñas
              <div className="smalltext-muted">
                <small>Chalecos</small>
              </div>
            </a>
          </li>
          <li className="nav2-item ">
            <a
              className="nav-link d-flex flex-column align-items-center text-center "
              href="/tienda"
            >
              Adultos
              <div className="smalltext-muted">
                <small>Chalecos</small>
              </div>
            </a>
          </li>
          <li className="nav2-item">
            <a
              className="nav-link d-flex flex-column align-items-center text-center"
              href="/tienda"
            >
              Zapatos
              <div className="smalltext-muted">para Bebé</div>
            </a>
          </li>
          <li className="nav2-item">
            <a
              className="nav-link"
              href="/tienda"
            >Otros
            </a>
          </li>
        </ul>
      </div>
      )
    }
    export default Navbar3; 