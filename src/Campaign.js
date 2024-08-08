import React from 'react'
import spark from './asserts/shape2.png'
import sun from "./asserts/icon4.png"
import foc from './asserts/icon5.png'
import vedio from './asserts/icon6.png'
import regular from './asserts/icon7.png'
import improved from './asserts/icon8.png'
import paid from './asserts/icon9.png'
const Campaign = () => {
  return (
    <div className='container-fluid bannerbg py-3' >
<h1 className='text-center pt-5   fw-bold text-light text-center'>What Are The Gains You Receive</h1>
<h1 className='text-center fw-bold text-light'>Every SEO Campaign?</h1><img src={spark} alt=""  className='  animate-move'/>
<h5 className='d-flex justify-content-center '>Distinctively supply exceptional services after uniquely integrate alternative </h5>
<h5 className='d-flex justify-content-center pb-3'>markets rather emerging initiatives.</h5>
<div className="row px-2 " >
    <div className="col-lg-4 col-md-4 col-sm-12  p-3 animate_border">
      <div className=" p-4 rounded-4  border m-1" data-aos="fade-up">
        <div className='d-flex justify-content-center '><img src={sun} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3>Analize </h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 p-3">
      <div className="border p-4 rounded-4 " data-aos="fade-up">
        <div className='d-flex justify-content-center'><img src={foc} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3>Focus </h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 p-3">
      <div className="border p-4 rounded-4" data-aos="fade-up">
        <div className='d-flex justify-content-center '><img src={vedio} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3> Boosting</h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    
   
  </div>
  <div className="row px-2" >
    <div className="col-lg-4 col-md-4 col-sm-12 p-3">
      <div className="border p-4 rounded-4" data-aos="fade-down">
        <div className='d-flex justify-content-center '><img src={regular} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3> Updates</h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 p-3 ">
      <div className="border p-4 rounded-4"data-aos="fade-down">
        <div className='d-flex justify-content-center'><img src={improved} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3> Reports</h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12 p-3">
      <div className="border p-4 rounded-4"data-aos="fade-down">
        <div className='d-flex justify-content-center'><img src={paid} alt="noimg"  style={{width:"20%"}} /></div>
        <div className='d-flex justify-content-center fw-bold text-light'><h3> Marketing</h3></div>
        <div className='d-flex justify-content-center'>Monotonectally foster principles supply chains visvis sustainabes items energistically</div>
        
         
        
      </div>
    </div>
    
   
  </div>


      
    </div>
  )
}

export default Campaign
