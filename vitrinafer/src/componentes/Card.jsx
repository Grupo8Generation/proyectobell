const Card = () =>{
return <div className="card">
<div style="position: relative;">
    <img src="/img/amigurumiconejito.jpg" className="card-img-top" alt="amigurumiconejito"></img>
    <div className="barra-horizontal"></div>
    <alert className="btn2" style="position: absolute; top: 0px; left: 0px;"> Oferta
    </alert>
</div>
<div className="card-body">
    <h6 className="card-hashtag"> #Amigurumis</h6>
    <h5 className="card-title">Amigurumi Conejito</h5>
    <h3 className="card-text"><strong>$18.000</strong></h3>
</div>
<div className="mb-5 d-flex justify-content-around">
    <a id="compraYalg" class="btn" href="destino.html" role="button">Comprar</a>
</div>
</div>


} 

export default Card;