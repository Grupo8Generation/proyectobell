import { useEffect, useState } from "react"
import { Card } from "@mui/material"
import NavBar from "./NavBar"
import NavBar2 from "./Navbar2"
import Footer from "./Footer"



export const Vitrina = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async() => {
        try{
    const response = await fetch('/products')
        const data = await response.json()
        
        setProductos(data)
        console.log(data)  
    }
catch(error){
    console.log('Error fetching products',error);
}}

    useEffect(() => {
        fetchProductos()

    }, [])

    return <>
        <div>
            <NavBar></NavBar>
            <div className="container-fluid text-center tienda h1">
                Tienda
            </div>
            <NavBar2></NavBar2>
        </div>
        <div className="container-fluid vitrina-productos">
        
        {productos.map((producto) => (
             <Card 
             key={producto.id}
             imagen={producto.image}
             titulo={producto.title}
             descripcion={producto.description}
             precio={producto.price}
             ></Card>
            ))} 
            </div>
       <Footer/>
    </>
}


