import React from 'react'

const HomeFooter = () => {
  return (
<div className='container-fluid bg-black'>
    <div className=' text-light p-2' >
<div className='d-flex flex-wrap d-lex justify-content-between p-1'>
    <div className='mt-5 '>
        <h4>Techno</h4>
        <p>Ullamcorper risus ultrices in lorem. Vulputate aliquam</p>
        <div>
        <span className='m-3'><i class="bi bi-facebook"></i></span>
                <span className='m-3'><i className="bi bi-twitter-x"></i></span>
                <span className='m-3'><i className="bi bi-instagram"></i></span>
                <span className='m-3'><i className="bi bi-linkedin"></i></span>
        </div>

    </div>
    <div className='mt-5 '>
        <h4>Company</h4>
        <p>About Us</p>
        <p>All Portfolio</p>
        <p>News & Article</p>
        <p>Our Team</p>
    </div>
    <div className='mt-5  '>
        <h4>Our Solutions</h4>
        <p>Web Development</p>
        <p>Cloud Solutions</p>
        <p>Cyber Security</p>
        <p>App Development</p>
    </div>
    <div className='mt-5'>
     <h4> Our Newsletter</h4>
    <input type="text"className='p-3'  placeholder='Enter the Email*'style={{backgroundColor:'dark',color:'black'}} /><label  className='border p-3' style={{backgroundColor:"rgb(165,249,48)",color:'black'}}>Subscribe</label>
     <p className='pt-3'>When do they work well, and when do
    </p>
    </div>
</div>

    </div>
    <div className='container'>
    <hr style={{color:'white'}} />
    </div>
    
    <div className='d-flex flex-wrap justify-content-around mx-5' >
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

export default HomeFooter
