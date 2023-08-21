import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./Navbar2";
import Footer from "./Footer";
// import CardContainer from "../CardContainer"; // Importa el componente CardContainer
import "./Vitrinas.css";


function Vitrina() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        // Transformar los datos para asegurarse de que tengan la estructura esperada
        const transformedData = data.map(item => ({
          id: item.id, // Asegurarte de usar la propiedad correcta para el id
          nombre: item.nombre,
          categoria: item.categoria
        }));
  
        setData(transformedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = data.filter(Producto => !selectedCategory || Producto.categoria === selectedCategory);

  return (
    <div>
<NavBar></NavBar>
<div className="container-fluid text-center tienda h1">Tienda</div>
 
    <NavBar2 setSelectedCategory={setSelectedCategory} />
    {/* <div>
        <label>Seleccionar Categoría:</label>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">Todos</option>
          <option value="Amigurumis">Amigurumis</option>
          <option value="Niños&Niñas">Niños&Niñas</option>
          <option value="Adultos">Adultos</option>
          <option value="Zapatos">Zapatos</option>
          <option value="Otros">Otros</option>
        </select>
      </div> */}
     <div className="App">
      <div id="card-container">
        {filteredData.map(Producto => (
        <div key={Producto.id}>
       <h2>{Producto.nombre}</h2>
      <p>{Producto.descripcion}</p>
      <h3>{Producto.precio}</h3>
       <a className="btn" href="destino.html" role="button">Comprar</a>
       </div>
        ))}
       <Footer></Footer>
    </div>
    </div>
    </div>
  );
}
export default Vitrina;

