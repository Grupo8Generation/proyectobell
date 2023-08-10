import { useEffect, useState } from "react"
import Navbar2 from "./Navbar2"
import { Card } from "@mui/material"
import NavBar from "../../componentes/NavBar"

export const Vitrina = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
    const response = await fetch('')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])





    return <>
        <div>
            <NavBar/>
            <Navbar2 />
        </div>
        <h1>Compras:</h1>
        <hr />
        {productos.map((producto) => (
             <Card
             imagen={producto.image}
             titulo={producto.title}
             precio={producto.price}
             ></Card>
        ))}
       
    </>
}


