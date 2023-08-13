import './Cards.css'
import pepaImage from "./BeLLImg600/Frame25.png"
const CardFija1 = () => {


  return <>
    <div className="card">
      <div>
        <img src={pepaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Amigurumi</h6>
        <h5 className="card-title">Pepa</h5>
        <h3 className="card-text"><strong>$20.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija1;

 