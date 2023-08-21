import React from "react";
import "./NavBar2s.css";

const Navbar2 = ({ setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="NavBar2 py-2">
      <ul className="nav justify-content-center">
      <li className="nav2-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={() => handleCategoryClick("")}
          > Todos
          </a>
        </li>
        <li className="nav2-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={() => handleCategoryClick("Amigurumis")}
          > Amigurumis
          </a>
        </li>
        <li className="nav2-item">
          <a
            className="nav-link d-flex flex-column align-items-center text-center"
            href="#"
            onClick={() => handleCategoryClick("Niños&Niñas")}
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
            href="#"
            onClick={() => handleCategoryClick("Adultos")}
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
            href="#"
            onClick={() => handleCategoryClick("Zapatos")}
          >
            Zapatos
            <div className="smalltext-muted">para Bebé</div>
          </a>
        </li>
        <li className="nav2-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => handleCategoryClick("Otros")}
          >
            Otros
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
