import { useEffect, useState } from "react"
import { Card } from "@mui/material"
import NavBar from "./NavBar"
import NavBar2 from "./Navbar2"
import Footer from "./Footer"
import CardContainer from "../CardContainer"



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
        
        
        <CardContainer></CardContainer>
            </div>
       <Footer/>
    </>
}


