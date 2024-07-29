import React from 'react'
import MyState from './Context/myState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Sinup from './Page/Ragistation/Sinup'
import Shope from './Page/Shope/Shope'
import Cart from './Page/Cart/Cart'
import Sinin from './Page/Ragistation/Sinin'
import Admin from './Page/Admin/Admin'
import Userdasbord from './Page/Userdasbord/Userdasbord'
import Contact from './Page/Contact/Contact'

function App() {
  return (
    <MyState>
      <BrowserRouter>
      
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/sinup' element={<Sinup/>}/>
          <Route path = '/shop' element={<Shope/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          <Route path = '/sinin' element = {<Sinin/>}/>
          <Route path='/admin' element = {<Admin/>}/>
          <Route path = '/userdasbord' element = {<Userdasbord/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          
        </Routes>
      </BrowserRouter>

    </MyState>
  )
}

export default App