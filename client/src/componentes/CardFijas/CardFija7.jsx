import './Cards.css'
import botAmImage from "./BeLLImg600/Frame24.png"
import { Link } from 'react-router-dom';


const CardFija7 = () => {


  return <>
    <div className="card">
      <div>
        <img src={botAmImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div class="barra-horizontal"></div>
        <h6 className="card-hashtag"> #BotitasBebe</h6>
        <h5 className="card-title">Botas botón</h5>
        <h3 className="card-text"><strong>$8.500</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija7;

