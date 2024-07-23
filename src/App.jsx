import React from 'react'
import MyState from './Context/myState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Sinup from './Page/Ragistation/Sinup'
import Shope from './Page/Shope/Shope'
import Cart from './Page/Cart/Cart'

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/sinup' element={<Sinup/>}/>
          <Route path = '/shope' element={<Shope/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          
        </Routes>
      </BrowserRouter>

    </MyState>
  )
}

export default App