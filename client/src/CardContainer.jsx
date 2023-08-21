// import React, { useEffect, useState } from 'react';
// import "./CardContainers.css"

// function CardContainer({ selectedCategory }) {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/products')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setFilteredData(data); // Inicialmente, muestra todos los productos
//       })
//       .catch(error => {
//         console.error('Error al obtener los datos:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === '') {
//       setFilteredData(data); // Muestra todos los productos si no hay categoría seleccionada
//     } else {
//       const filtered = data.filter(producto => producto.categoria === selectedCategory);
//       setFilteredData(filtered);
//     }
//   }, [selectedCategory, data]);

//   return (
//     <div id="card-container">
//       {filteredData.map(producto => (
//         <div key={`${producto.categoria}_${producto.id}`} className="card">
//           <h2>{producto.nombre}</h2>
//           <p>{producto.descripcion}</p>
//           <h3>{producto.precio}</h3>
//           <a className="btn" href="destino.html" role="button">Comprar</a>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default CardContainer;


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


/* <img className="card-img-top" src={producto.imagenUrl} alt={producto.nombre} />*/





//<div id="card-container">
//       {filteredData.map(producto => (
//         <div li key={{Producto.id}
//           <h2>{Producto.nombre}</h2>
//           <p>{Producto.descripcion}</p>
//           <h3>{Producto.precio}</h3>
//           <a className="btn" href="destino.html" role="button">Comprar</a>
//         </div>
//       ))}
//     </div>

 //<li key={Producto.id}>Nombre: {Producto.nombre} - Categoría: {Producto.categoria}</li>