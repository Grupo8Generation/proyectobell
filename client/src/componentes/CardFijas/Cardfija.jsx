import './Cards.css'
import amigurumiconejitoImage from "../CardFijas/BeLLImg600/amigurumiconejito.jpg"



const Card = () => {


  return <>
    <div className="card">
      <div>
        <img src={amigurumiconejitoImage} className="card-img-top" alt="cascabelconejo"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Cascabel</h6>
        <h5 className="card-title">Cascabel de Conejito</h5>
        <h3 className="card-text"><strong>$18.000</strong></h3>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
      </div>
    </div>
  </>
}



export default Card;