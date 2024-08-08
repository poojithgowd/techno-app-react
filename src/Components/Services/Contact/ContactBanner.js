import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import ServicesFooter from '../ServicesFooter'

const ContactBanner = () => {
  return (
    <div >
          <div className='container-fluid servicebg p-5 '>
          <div className='card bg-transparent p-5'>
          <div><h1 className='text-light  mt-5 text-center pt-5 fw-bold display-4'>Contact</h1></div>
          <div><h5 className='text-light d-flex justify-content-center'><Link to='/'className='nav-link   '>Home &nbsp;</Link> &#62; &nbsp;Contact</h5></div>
      </div>
            </div>
            <div className=' card container-fluid pt-5' style={{border:'none'}}>
         <div className='text-center pt-5  pb-3 fw-bold text-primary' >CONTACT US</div>
         <h1 className='text-center  fw-bold'>We Are Here For You</h1>
         <p className=' text-center'>Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form so that we can get to know you and understand your project.</p>
        
      </div>
      <div className="row   container-fluid   py-5" >
    <div className="col-lg-4 col-md-4 col-sm-12  col-12 p-3 ">
      <div className=" p-4 rounded-4  border m-1" >
        <div className='text-center text-primary'><i className="bi bi-geo-alt mx-3 " style={{fontSize:'40px'}}></i></div>
        <div className=' text-center fw-bold '><h3>Enter Your Address</h3></div>
        <div className='text-center'><p>54/1 New sorini Asut, Melbord Austria.</p></div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  col-12  p-3">
      <div className="border p-4 rounded-4">
        <div className='text-center text-primary'><i className="bi bi-clock-history" style={{fontSize:'40px'}}></i></div>
        <div className='text-center fw-bold '><h3>Opening Hours</h3></div>
        <div className='text-center'><p>Mon - Thu: 10:00am - 05:00pm</p></div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  col-12  p-3">
      <div className="border p-4 rounded-4">
        <div className='text-center text-primary'><i className="bi bi-telephone-plus mx-3  " style={{fontSize:"40px"}}></i></div>
        <div className='text-center fw-bold '><h3>Contact Directly</h3></div>
        <div className='text-center'><p>demo@example.com, 54786547521</p></div>
        
         
        
      </div>
    </div>
    
   
         </div>
         <div className='container-fluid p-5 bg-body-tertiary'>
        <div className='card bg-tranaparent text-center bg-transparent' style={{border:'none'}}>
           <div  className='my-3 text-primary fw-bold'><h4>CONTACT US</h4></div>
           <div ><h1 className='fw-bold'>Feel Free Contact</h1></div>
           <div ><h2 className='fw-bold'>Us Now</h2></div>
           <ContactForm/>
        

        </div>
     </div>       
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3805.323180102182!2d78.39097380975744!3d17.492079483343854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssocial%20prachar%20hyderabad!5e0!3m2!1sen!2sin!4v1720727962680!5m2!1sen!2sin" style={{width:'100%', height:"320px",  allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
<ServicesFooter/>
   </div>
  )
}

export default ContactBanner
