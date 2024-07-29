import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div>

       
            <Navbar/>
            <div className="main-content min-h-screen pt-16">
                {children}
            </div>
            <Footer/>
        


    </div>
  )
}

export default Layout