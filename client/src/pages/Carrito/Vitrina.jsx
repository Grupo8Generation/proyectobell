import { useEffect, useState } from "react"
import Navbar2 from "./Navbar2"
import { Card } from "@mui/material"

import NavBar from "../../componentes/NavBar"
import './Vitrinas.css'
import Footer from "../../componentes/Footer"

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
            <NavBar/>
            <div className="container-fluid text-center tienda h1">
                Tienda
            </div>
            <Navbar2 />
        </div>
        <div className="container-fluid vitrina-productos">
        
       
            
           
            </div>
       <Footer/>
    </>
}


