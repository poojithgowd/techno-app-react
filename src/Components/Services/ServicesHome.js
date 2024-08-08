import React from 'react'
import ServicesBanner from './ServicesBanner'
import ServicesFooter from './ServicesFooter'
import ServicesAtomic from './ServicesAtomic'

const ServicesHome = () => {
  return (
    <div>
      <ServicesBanner/>
      <ServicesAtomic/>
      <ServicesFooter/>
    </div>
  )
}

export default ServicesHome
