import React from 'react'
import techno from '../../asserts/logo2-1.png'
import mobile from '../../asserts/mobile.jpg'
import coin from '../../asserts/coin.jpg'
const ServicesFooter = () => {
  return (
    <div className='container-fluid ' style={{backgroundColor:'rgb(12, 3, 107)'}}>
        <div className='container d-flex justify-content-between p-1 flex-wrap pt-5'>
            <div className='m-3'>
                <div><img src={techno} alt="" className='p-2'/></div>
                <div><p className=' text-center text-light'>Completely strategize client-cent Phosfluorescently</p></div>
                <div><h5 className='text-light'>FOllow Us</h5></div>
                <div className='mt-4'style={{fontSize:"25px"}}>
                <span className='m-2   p-2 border bg-light text-primary ' ><i className="bi bi-facebook" ></i></span>
                <span className='m-2  p-2 border bg-light'><i className="bi bi-twitter-x"></i></span>
                <span className='m-2  p-2 border text-danger bg-light'><i className="bi bi-instagram"></i></span>
                <span className='m-2 p-2 border bg-light text-primary'><i className="bi bi-linkedin"></i></span>
                </div>

            </div>
            <div className='m-3'>
                <h3 className='p-2 text-light'>Quick Links</h3>
                <ul className='text-light'>
                    <li>HOME</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                    <li>Our Team</li>
                    
                </ul>
            </div>
            <div className='m-3'>
                 <div><h3 className='p-2 text-light'>Popular Post</h3></div>
                 <div className='d-flex text-light'>
                    <div><img src={mobile} alt=""  style={{width:"60px"}} className='mx-3'/></div>
                    <div >
                        <h6>Content strategy can helpengage customers</h6>
                        <h6>October 29,2023</h6>
                    </div>
                 </div>
                 <hr />
                 <div className='d-flex text-light'>
                    <div><img src={coin} alt=""  style={{width:"60px"}}className='mx-3'/></div>
                    <div>
                        <h6>Content strategy can helpengage customers</h6>
                        <h6>October 29,2023</h6>
                    </div>
                 </div>
            </div>
            <div className='m-3 text-light'>
            <div><h3 className='p-2'>Contact Info</h3></div>
            <div className='d-flex'>
                    <div><i class="bi bi-geo-alt mx-3 " style={{fontSize:'40px'}}></i></div>
                    <div>
                        <h6>Location</h6>
                        <p>55 Main Street</p>
                    </div>
                 </div>
                 <div className='d-flex'>
                    <div><i className="bi bi-envelope-at mx-3" style={{fontSize:'40px'}}></i></div>
                    <div>
                        <h6>Email Us</h6>
                        <h6>abc@gmail.com</h6>
                    </div>
                 </div>
                 <div className='d-flex'>
                    <div><i className="bi bi-telephone-plus mx-3  " style={{fontSize:"40px"}}></i></div>
                    <div>
                        <h6>Phone Us</h6>
                        <h6>+012 34567899</h6>
                    </div>
                 </div>
            </div>

        </div>
        <div className='container'>
    <hr style={{color:'white'}} />
    </div>
    
    <div className='d-flex flex-wrap  justify-content-between p-1 mx-5' >
        <div className='p-3 text-light'> Techno © 2023 All Right Reserved</div>
        <div className='ms-auto d-flex  '>
            <div className='p-3 text-light'>Privacy & Terms</div>
            <div className='p-3 text-light'>FAQ</div>
            <div className='p-3 text-light'>Contact Us</div>
        </div>
    </div>
       
      
    </div>
  )
}

export default ServicesFooter
