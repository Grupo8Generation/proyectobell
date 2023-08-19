import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './Home'
import Carrito from './pages/Carrito/Carrito'
import { Vitrina } from './componentes/Vitrina'
import { Pasarela1 } from './componentes/Pasarelas/Pasarela1/Pasarela1'
import PreguntasFrecuentes from './componentes/Home/PreguntasFrecuentes'
import AspectosLegales from './componentes/Home/AspectosLegales'
import ProductosProvider from './context/ProductosProvider'
import CarritoProvider from './context/CarritoProvider'


export const App = () => {
  return (<>
<ProductosProvider>
  <CarritoProvider>
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Carrito' element={<Carrito></Carrito>}></Route>
      <Route path="/*" element={<Navigate to='/' />}> </Route>
      <Route path='/tienda' element={<Vitrina></Vitrina>}></Route>
      <Route path='/pasarela' element={<Pasarela1></Pasarela1>}></Route>
      <Route path='/tienda' element={<Vitrina></Vitrina>}></Route>
      <Route path='/preguntasFrecuentes' element={<PreguntasFrecuentes></PreguntasFrecuentes>} ></Route>
      <Route path='/aspectosLegales' element={<AspectosLegales></AspectosLegales>}></Route>
      

    </Routes>
    </CarritoProvider>
</ProductosProvider>
  </>
  )
}
