import React from 'react'
import Layout from '../../Component/Layout/Layout'
import HeroSection from '../../Component/HeroSection/HeroSection'
import Category from '../../Component/Category/Category'
import HomePageProduct from '../../Component/HomePageProduct/HomePageProduct'
import InnerPice from '../../Component/InnerPice/InnerPice'
import FunireFurniture from '../../Component/funireFurniture/FunireFurniture'
import Sinup from '../Ragistation/Sinup'
import SingalProduct from '../SingalProduct/SingalProduct'

function Home() {
  return (
    <div>
    <Layout>
        <HeroSection/>
        {/* <SingalProduct/> */}
        {/* <Sinup/> */}
        <Category/>
        <HomePageProduct />
        <InnerPice/>
        <FunireFurniture/>
    </Layout>

        

    </div>
  )
}

export default Home