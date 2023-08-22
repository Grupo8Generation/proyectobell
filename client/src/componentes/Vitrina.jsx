import { useContext } from "react"
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import NavBar2 from "./Navbar2"
import Footer from "./Footer"
import Card1 from "../pages/Carrito/Card1"
import "./Vitrinas.css"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"
import Frame17 from "/Frame17.png";


 



export const Vitrina = () => {

  const { productos } = useContext(ProductosContext)
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
  
  const handleAgregar = (compra) => {
      agregarCompra(compra)
  }
  const handleQuitar = (id) => {
      eliminarCompra(id)
  }

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
          precio: item.precio,
          imagenUrl: item.imagenUrl,
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

  return <>

 <NavBar></NavBar>
        <div className="container-fluid text-center tienda h1">
            Tienda
        </div>

        <NavBar2 setSelectedCategory={setSelectedCategory} />
        <div className="contenedor-vitrina">
          <div className="card">
      <div>
        <img src={Frame17} className="card-img-top" alt="personalizado"></img>
      </div>
      <div className="card-body">
        <h6 className="card-hashtag"> #Personalizado</h6>
        <h5 className="card-title">Pide tu producto personalizado</h5>
        <a id="compraYalg" className="btn" href="destino.html" role="button">Pide aquí</a>
      </div>
          </div>
            {filteredData.map(Producto => (
                <Card1 key={Producto.id}
                    imagenUrl={Producto.imagenUrl}
                    nombre={Producto.nombre}
                    precio={Producto.precio}
                    handleAgregar={() => handleAgregar(Producto)}
                    handleQuitar={() => handleQuitar(Producto.id)}
                ></Card1>
            ))}
        </div>

        <Footer />
    </>
}
export default Vitrina;