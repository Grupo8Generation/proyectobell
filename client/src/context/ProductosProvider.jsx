import { ProductosContext } from "./ProductosContext"
import { useEffect,useState } from "react"


const  ProductosProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async() => {
        try{
    const response = await fetch('https://belltejidosconamor22.onrender.com/products')
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


  return (
   <ProductosContext.Provider value={{productos}}>
    {children}
   </ProductosContext.Provider>
  )
}
export default ProductosProvider