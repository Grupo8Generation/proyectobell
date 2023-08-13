import './Cards.css'
import zapImage from "./BeLLImg600/Frame60.png"
const CardFija8 = () => {


  return <>
    <div className="card">
      <div>
        <img src={zapImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #ZapatillasBebe</h6>
        <h5 className="card-title">Zapatillas Replicas NIke</h5>
        <h3 className="card-text"><strong>$4.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}

export default CardFija8;

