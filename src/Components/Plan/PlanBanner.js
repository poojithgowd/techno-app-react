import React from 'react'
import { Link } from 'react-router-dom'
import ServicesBall from '../Services/ServicesBall'
import Employeecards from '../Services/Employeecards'

const PlanBanner = () => {
  return (
    <div className='' >
    <div className=' bg-primary '>
       <div className='container-fluid  p-5 '>
          <div className='card bg-transparent pt-5' style={{border:'none'}}>
          <div><h1 className='text-light mt-5  text-center pt-5 fw-bold display-4'>Pricing Plan-01</h1></div>
          <div><h5 className='text-light d-flex justify-content-center'><Link to='/'className='nav-link   '>Home &nbsp;</Link> &#62; &nbsp;Contact</h5></div>
      </div>
            </div>
      
          
      
    </div>
    <div className='row   container-fluid '>
      <div className="col-lg-4 col-md-4 col-sm-12  col-12  p-4 ">
      <div className=" card-container p-4 rounded-4  " >
        <div className='text-center text-primary'><h1>Basic Plan</h1></div>
        <div className='text-center text-primary'><h6 className=''> <span className='display-6 fw-bold'>49.99</span> /Month</h6></div>
        <div className='card text-center card-container p-2'> 
          <p>30 Days Trial Features</p>
          <p>Synced To Cloud Database</p>
          <p>10 Hours Of Support</p>
          <p>Social Media Integration</p>
          <p>Unlimited Features</p>
        </div>
        <div className='d-flex justify-content-center p-3 '><button className="p-2 px-3 rounded-2 buttonbgchange"> Choose Plan</button>
        </div>
        
         
        
      </div>

        </div>
        <div className="col-lg-4 col-md-14 col-sm-12  col-12   p-4 ">
        <div className=" p-4 rounded-4   border border-primary">
        <div className='text-center text-primary'><h1>Premium Plan</h1></div>
        <div className='text-center text-primary'><h6 className=''> <span className='display-6 fw-bold'>99.77</span> /Month</h6></div>
        <div className='card text-center  p-2 border border-primary'> 
          <p>30 Days Trial Features</p>
          <p>Synced To Cloud Database</p>
          <p>10 Hours Of Support</p>
          <p>Social Media Integration</p>
          <p>Unlimited Features</p>
        </div>
        <div className='d-flex justify-content-center p-3'><button className="p-2  px-3 rounded-2 bg-primary text-light"> Choose Plan</button>
        </div>
        
         
        
      </div>

      
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  col-12 p-4">
      <div className=" card-container p-4 rounded-4  " >
        <div className='text-center text-primary'><h1>Ultra Plan</h1></div>
        <div className='text-center text-primary'><h6 className=''> <span className='display-6 fw-bold'>89.49</span> /Month</h6></div>
        <div className='card text-center card-container p-2'> 
          <p>30 Days Trial Features</p>
          <p>Synced To Cloud Database</p>
          <p>10 Hours Of Support</p>
          <p>Social Media Integration</p>
          <p>Unlimited Features</p>
        </div>
        <div className='d-flex justify-content-center p-3 '><button className="p-2  px-3 rounded-2 buttonbgchange"> Choose Plan</button>
        </div>
        
         
        
      </div>

        </div>

      </div>
      <div className='p-3' style={{ background: "linear-gradient(to top right, #0000cc 0%, #66ffff 100%)",}}>
          <div className='card  py-5 my-5 text-light text-center ' style={{border:'none',background:'none'}}>
            <h1>Start your free trial. No credit card needed.</h1>
            <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div><button className='p-2 rounded-3 buttonbgchange px-3'>Contact Us</button></div>  
          </div>
      </div>
      <div className='text-center p-5 container-fluid ' >
        <h5 className='text-primary'>FAQ'S</h5>
        <h1>Need Any Help ?</h1>
        <h2>Read Popular Questions</h2>
      </div>
      <ServicesBall/>
      <div class="row d-flex justify-content-between container-fluid">
  <div class="col-lg-6 md-12 sm-12 ">
    <div class="card " style={{border:'none'}}>
      <div class="card-body">
         
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
      01. What is variations of fact?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      02. How much does a website cost?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Internet Of Things
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which

      </div>
    </div>
  </div>
</div>
        
      </div>
    </div>
  </div>
  <div class="col-lg-6 md-6 sm-12 ">
    <div class="card " style={{border:'none'}}>
      <div class="card-body">
         
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"  aria-controls="collapseFour">
      01. What is variations of fact?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      02. How much does a website cost?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      Internet Of Things
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which

      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<div className='container-fluid p-5 '>
        <div className='card bg-tranaparent text-center ' style={{border:'none'}}>
           <div  className='m-4 text-primary fw-bold'>TESTIMONIAL</div>
           <div className='fw-bold'><h2>What Says</h2></div>
           <div className='fw-bold p-2'><h2>Our Happy Clients</h2></div>
           

        </div>
        <ServicesBall/>
     </div>
    <Employeecards/>
    <div className='card bg-tranaparent text-center p-5' style={{border:'none'}}>
    <div><h2>Over 10,000 Clients Worldwide 
    </h2></div></div>
    
   
    </div>
  )
}

export default PlanBanner
