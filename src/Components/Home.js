import React from 'react'
import Banner from './Banner'
// import Seoagency from './Seoagency'
import Services from '../Services'
import Campaign from '../Campaign'
import Aboutus from './Aboutus'
import Allready from '../Allready'
import Test from './Test'
import HomeFooter from './HomeFooter'
import ServicesAtomic from './Services/ServicesAtomic'

const Home = () => {
  return (
    <div >
      <Banner/>     
      {/* <Seoagency/> */}
      <ServicesAtomic/>
      <Services/>
      <Campaign/>
      <Aboutus/>
      <Allready/>
      <Test/>
      <HomeFooter/>
      
    </div>
  )
}

export default Home;
