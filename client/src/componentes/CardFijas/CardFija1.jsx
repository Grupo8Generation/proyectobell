import './CardFija1s.css'
import pepaImage from "./BeLLImg600/Frame25.png"
import { Link } from 'react-router-dom';
const CardFija1 = () => {


  return <>
    <div className="card">
      <div className="card-imgCon">
      <img src={pepaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Amigurumi</h6>
        <h5 className="card-title">Pepa</h5>
        <h3 className="card-text"><strong>$20.000</strong></h3>
        <Link to="/tienda" id="compraYalg" className="btn" href="destino.html" role="button">Ver más</Link>
      </div>
    </div>
  </>
}

export default CardFija1;

 