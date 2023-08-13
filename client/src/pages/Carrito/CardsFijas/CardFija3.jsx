import './Cards.css'
import conImage from "./BeLLImg600/Frame31.png"
const CardFija3 = () => {


  return <>
    <div className="card">
      <div>
        <img src={conImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Amigurumi</h6>
        <h5 className="card-title">Cascabel de conejo y argolla </h5>
        <h3 className="card-text"><strong>$6.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija3;
