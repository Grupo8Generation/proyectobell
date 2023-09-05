import './Cards.css'
import pikaImage from "./BeLLImg600/Frame1.png"
import { Link } from 'react-router-dom';

const CardFija2 = () => {


  return <>
    <div className="card">
      <div>
        <img src={pikaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div class="barra-horizontal"></div>
        <h6 className="card-hashtag"> #Amigurumi</h6>
        <h5 className="card-title">Juguete sensorial Pikachu</h5>
        <h3 className="card-text"><strong>$6.000</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija2;

