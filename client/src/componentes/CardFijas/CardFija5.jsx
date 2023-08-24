import './Cards.css'
import botaImage from "./BeLLImg600/Frame27.png"
import { Link } from 'react-router-dom';

const CardFija5 = () => {


  return <>
    <div className="card">
      <div>
        <img src={botaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
      <div class="barra-horizontal"></div>
        <h6 className="card-hashtag"> #Bordado</h6>
        <h5 className="card-title">Botas floral</h5>
        <h3 className="card-text"><strong>$4.000 c/u</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija5;

