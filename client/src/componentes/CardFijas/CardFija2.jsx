import './Cards.css'
import pikaImage from "./BeLLImg600/Frame1.png"
const CardFija2 = () => {


  return <>
    <div className="card">
      <div>
        <img src={pikaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Amigurumi</h6>
        <h5 className="card-title">Juguete sensorial Pikachu</h5>
        <h3 className="card-text"><strong>$6.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija2;

