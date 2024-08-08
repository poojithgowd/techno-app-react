import React from 'react'
import pic1 from '../asserts/about3.png'
import pic3 from '../asserts/shap1.png'
import people from '../asserts/peolpe.png'
const Aboutus = () => {
  return (
    <div className='aboutbg container-fluid'>
    <div className="row  ">
    <div className="col-lg-6 col-md-12 col-sm-12  col-12  px-4">
    <div className="card  mx-4 pt-5 mt-5  "style={{background:"none",color:"white",border:'none'}}>
                            <h5 style={{color:"rgb(181, 252, 98)"}}>ABOUT US</h5>
                            <h2>Dispcover THE Most Expertise </h2>
                            <h2>Of Our SEO Agency</h2>
                            <p>Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque potenti. Vulputate ut aliquam, consectetur turpis odio</p>
                            <ul className='geentick'>
                                <li className='greenti'>Continually engineer ethical partnership</li>
                                <li className='greenti'>Seamlessly pursue orthogonal customer service</li>
                                <li className='greenti'>Dynamically reconceptualize value</li>
                            </ul>
                            <div className='row pb-4 text-center'>
                                <div className='col-lg-6 col-md-6 col-sm-6  col-12'> <img src={people} alt=""  style={{height:'100%'}} /></div>
                                <div className='col-lg-6 col-md-6 col-sm-6  col-12'>
                                <p className=' ms-4'><b >Al Over 3M+ People Trusted
                                <br />around the World.</b></p>

                                </div>
                         
                            </div>
                           
                            
                        </div>
        </div>
    <div className="col-lg-6 col-md-12 col-sm-12  col-12  " >
        <div className='card mx-5 px-5 ' style={{background:"none",color:"white",border:'none'}}>
            <div><img src={pic3} alt="" style={{position:"relative",left:'10%',top:"30px"}} className='image-container'/></div>
        <img src={pic1} alt=""  />
        </div>
        </div>
        </div>
        </div>
  )
}

export default Aboutus
