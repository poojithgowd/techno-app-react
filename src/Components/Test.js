import React from 'react'
import pic from '../asserts/shape2.png'
import testi3 from '../asserts/testi3.png'
import testi2 from "../asserts/testi2.png"
const Test = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:'black'}}>
   
    <div className="row  container">
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                <div className="card   pt-5"style={{background:"none",color:"white"}}>
                    <h5 style={{color:"rgb(181, 252, 98)"}}>TESTIMONIAL</h5>
                    <h1>What Say Our Customers </h1>
                    <h2>About Dexon</h2>
                    
                </div>
    </div>
<div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
            <img src={pic} alt=""  style={{width:'50px'}} className='animate-move pt-5'/>

    

</div>
</div>
 



    <div className="row  m-1">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className="card p-2 border rounded-4"style={{background:"none",color:"white"}}>
                   <div className='d-flex'>
                    <div className='px-3'><img src={testi3} alt="" /></div>
                    <div>
                        <div className='text-light'><h4>Sonia </h4></div>
                        <div>Marketater</div>
                    </div>
                    <div className=' ms-auto'>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star px-1"></span>
                    <span className="fa fa-star px-1"></span>
                                        </div>
                   </div>
                   <p className='fst-italic pt-3'>"Rapidiously generate flexible best practices and business internal or "organic" Sourses.Progressively strategize client centered convergence via done "</p>
                    
                </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                <div className="card p-2 border rounded-4"style={{background:"none",color:"white"}}>
                   <div className='d-flex'>
                    <div className='px-3'><img src={testi2} alt="" /></div>
                    <div>
                        <div className='text-light'><h4>Anusha</h4></div>
                        <div>Marketater</div>
                    </div>
                    <div className=' ms-auto'>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                    <span className="fa fa-star checked px-1"></span>
                                        </div>
                   </div>
                   <p className='fst-italic pt-3'>"Rapidiously generate flexible best practices and business internal or "organic" Sourses.Progressively strategize client centered convergence via done "</p>
                    
                </div>
    </div>
    
   
  </div>
  <div className='container'>
  <h1 className='text-center pt-5   fw-bold text-light'>Are You Excited To Start </h1>
  <h1 className='text-center    fw-bold text-light'>SEO Compaign?</h1>
  <div className='text-center  p-3 '>  <button className=' over rounded-4 'style={{backgroundColor:"rgb(180,248,85)",border:'none'}}><h5 className=' fw-bold p-3 getstarted' >GET STARTED..</h5></button>
  </div>


  </div>
    
   
</div>
 
  )
}

export default Test
