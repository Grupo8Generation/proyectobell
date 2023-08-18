// CardContainer.jsx

import React, { useEffect, useState } from 'react';
import "./CardContainers.css"

function CardContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div id="card-container">
        
      {data.map(producto => (

        <div key={producto.id} className="card">
            
     <img className="card-img-top" src={producto.imagenUrl} alt={producto.nombre} />
          <h2 className=''>{producto.nombre}</h2>
          <p>{producto.descripción}</p>
          <h3 className=''>{producto.precio}</h3>
          <a id="compraYalg" className="btn" href="destino.html" role="button">Comprar</a>
        </div>
        
      ))}
      
    </div>
  );
}

export default CardContainer;

/*eturn <>
<div  id="card-container">
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
//*/
