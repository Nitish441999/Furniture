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
import { Toaster } from 'react-hot-toast'
import SingalProduct from './Page/SingalProduct/SingalProduct'
import AddProduct from './Component/AddProduct/AddProduct'
import { ProtectedRouteForAdmin } from './ProtectedRoute/ProtectedRouteAdmin'

import UpdateProductPage from './Page/UpdateProductPage/UpdateProductPage'
import { ProtectedRouteForUser } from './ProtectedRoute/ProtectedRouteUser'
import CategoryPage from './Page/Category/CategoryPage'
import ScrollTop from './Component/ScrolTop/ScrollTop';



function App() {
  return (
    <MyState>
      <BrowserRouter>
      <ScrollTop/>
      
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/sinup' element={<Sinup/>}/>
          <Route path = '/shop' element={<Shope/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          <Route path = '/signin' element = {<Sinin/>}/>
         
          
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/singlePage/:id' element = {<SingalProduct/>}/>
          <Route path = '/category/:categoryname' element = {<CategoryPage/>}/>
          
          
          <Route path = '/userdashboard' element = {
            <ProtectedRouteForUser>
              <Userdasbord/>
            </ProtectedRouteForUser>
          }/>

          <Route path='/addProduct' element = {
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          }/>

          <Route path='/admin' element = {
            <ProtectedRouteForAdmin>
              <Admin/>
            </ProtectedRouteForAdmin>
          }/>

          <Route path='/updateProductPage' element = {
            <ProtectedRouteForAdmin>
              <UpdateProductPage/>
            </ProtectedRouteForAdmin>
          }/>


        </Routes>
        <Toaster/>
      </BrowserRouter>

    </MyState>
  )
}

export default App