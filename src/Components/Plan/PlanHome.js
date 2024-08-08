import React from 'react'
import PlanBanner from './PlanBanner'
import ServicesFooter from '../Services/ServicesFooter'
import ServicesAtomic from '../Services/ServicesAtomic'

const PlanHome = () => {
  return (
    <div >
      <PlanBanner/>
      <ServicesAtomic/>
      <ServicesFooter/>
    </div>
  )
}

export default PlanHome
