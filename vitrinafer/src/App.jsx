import React from 'react'
import NavBar from './componentes/NavBar'
import {Navigate, Route, Routes} from "react-router-dom"
import Home from './Home'
import { Pasarela1 } from './componentes/Pasarelas/Pasarela1/Pasarela1'
import Vitrina from './Vitrina'



export const App = () => {
  return (<>
<NavBar/>
 <Routes>

    <Route path='/' element={ <Home></Home>}></Route>
    <Route path='/Vitrina' element={ <Vitrina></Vitrina>}></Route>
    <Route path='/pasarela1' element={<Pasarela1></Pasarela1>}></Route>
    <Route path="/*" element={<Navigate to='/'/>}> </Route>
    
    </Routes>
  
  </>
  )
}
