import './Cards.css'
import botAmImage from "./BeLLImg600/Frame24.png"
const CardFija7 = () => {


  return <>
    <div className="card">
      <div>
        <img src={botAmImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #BotitasBebe</h6>
        <h5 className="card-title">Botas botón</h5>
        <h3 className="card-text"><strong>$8.500</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija7;

