import React from 'react'
import NavBar from './componentes/NavBar'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './Home'
import Carrito from './pages/Carrito/Carrito'
import { Vitrina } from './pages/Carrito/Vitrina'
import { Pasarela1 } from './componentes/Pasarelas/Pasarela1/Pasarela1'


export const App = () => {
  return (<>

    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Carrito' element={<Carrito></Carrito>}></Route>
      <Route path="/*" element={<Navigate to='/' />}> </Route>
      <Route path='/tienda' element={<Vitrina></Vitrina>}></Route>
      <Route path='/pasarela' element={<Pasarela1></Pasarela1>}></Route>
      <Route path='/tienda' element={<Vitrina></Vitrina>}></Route>

    </Routes>

  </>
  )
}
