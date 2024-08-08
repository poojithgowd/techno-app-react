import React from 'react'
import blueball from '../../asserts/blue ball.jpg'
const ServicesBall = () => {
  return (
    <div className='container d-flex justify-content-center'>
        <div>
        <img src={blueball} alt=""  style={{width:'30px'}} className='ballmoving mx-1'/>
        <hr className='text-primary rounded-5' style={{width:'70px',border:'5px solid', marginTop:'-18px'}} />

    </div>
    </div>
  )
}

export default ServicesBall
