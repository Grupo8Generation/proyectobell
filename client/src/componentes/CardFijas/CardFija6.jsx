import './Cards.css'
import cha3dImage from "./BeLLImg600/Frame26.png"
const CardFija6 = () => {


  return <>
    <div className="card">
      <div>
        <img src={cha3dImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Personalizado</h6>
        <h5 className="card-title">Chaleco 3d</h5>
        <h3 className="card-text"><strong>$20.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija6;

