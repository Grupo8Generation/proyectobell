import './Cards.css'
import botaImage from "./BeLLImg600/Frame27.png"
const CardFija5 = () => {


  return <>
    <div className="card">
      <div>
        <img src={botaImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Bordado</h6>
        <h5 className="card-title">Botas floral</h5>
        <h3 className="card-text"><strong>$4.000 c/u</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Ver más</a>
      </div>
    </div>
  </>
}

export default CardFija5;

