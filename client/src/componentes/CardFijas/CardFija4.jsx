import './Cards.css'
import girasolImage from "./BeLLImg600/Frame32.png"
const CardFija4 = () => {


  return <>
    <div className="card">
      <div>
        <img src={girasolImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Personalizado</h6>
        <h5 className="card-title">Flores GIRASOL</h5>
        <h3 className="card-text"><strong>$6.000 c/u</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija4;

