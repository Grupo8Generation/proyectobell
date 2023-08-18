import "./NavBar2s.css"


const Navbar2 =() => {
    return (
        <div className="NavBar2 py-2"> 
       <ul className="nav justify-content-center">
            <li className="nav2-item">
              <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
            </li>
            <li className="nav2-item">
              <a className="nav-link d-flex flex-column align-items-center text-center" href="#">
                Niños & Niñas
              <div className="smalltext-muted"><small>Chalecos</small></div>
                
                
            </a>
                
            </li>
            <li className="nav2-item ">
              <a className="nav-link d-flex flex-column align-items-center text-center " href="#">
                Adultos
                <div className="smalltext-muted"><small>Chalecos</small></div>
                </a>
             
            </li>
            <li className="nav2-item">
                <a className="nav-link d-flex flex-column align-items-center text-center" href="#">
                  Juguetes
                  <div className="smalltext-muted">de Bebé</div>
                  </a>
            </li>
            <li className="nav2-item">
                <a className="nav-link " href="#">
                  Zapatos
                  <div className="smalltext-muted">para Bebé</div>
                  </a>
               
            </li>
            <li className="nav2-item">
                <a className="nav-link" href="#">Otros</a>
            </li>
          </ul>
          </div>

    );
}
export default Navbar2;