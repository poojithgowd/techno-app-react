import React from 'react'
import lady from "./asserts/lady-with mirror.png"
import icon1 from "./asserts/icon1-1.png"
import icon2 from "./asserts/icon2.png"
import icon3 from "./asserts/icon3.png"
import icon4 from "./asserts/arrow_outward_42dp_5F6368_FILL0_wght400_GRAD0_opsz40.png"
const Services = () => {
  return (
    <div style={{backgroundColor:"black"}} className='container-fluid'>
         <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center "data-aos="fade-right" >
                        <div className="card  p-5"style={{background:"none",color:"white"}}>
                            <h5 style={{color:"rgb(181, 252, 98)"}}>SERVICES</h5>
                            <h1>SEO Solutions What </h1>
                            <h2>WE Provide</h2>
                            
                        </div>
            </div>
    <div className="col-lg-6 col-md-12 col-sm-12  col-12 p-5" >
     <h3 className='text-light'>Allamcorper risus ultrices risus <img src={icon4} alt="" style={{width:"9%",borderRadius:'50%'}} className='mulcol ms-auto ms-auto'/></h3>
     <h3 className='text-light'>pellentesque potenti more</h3>
    </div>
         </div>
         <div className='row p-'>
         <div className="col-lg-6 col-md-12 col-sm-12 col-12 " data-aos="fade-right">
                 <div className="card   mx-5 px-5" style={{background:"none"}}>
                    <img src={lady} alt=""style={{width:"90%"}} className=''/>
  </div>
         
            </div>
         <div className="col-lg-6 col-md-12 col-sm-12 col-12   " >
             <div className="">
                 
             <div className='card  p-3  ' style={{color:'whitesmoke',background:"none"}} data-aos="fade-up">
                        <div className='d-flex over border rounded-4 p-2'>
                            <div><img src={icon1} alt=""  style={{width:"80%"}}/></div>
                            <div>
                                <h3>
                                Keyword Research</h3>
                                <div className='d-flex'>
                                <h6>Allamcorper risus ultrices risus lorem vibero in</h6><img src={icon4} alt=""  style={{width:"10%",margin:'end'}} className=' ms-auto '/></div>                                <h6>pellentesque potenti more</h6>
                                
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className='card  p-3  ' style={{color:'whitesmoke',background:"none"}} data-aos="fade-up">
                        <div className='d-flex over border rounded-4 p-2'>
                            <div><img src={icon2} alt=""  style={{width:"80%"}}/></div>
                            <div>
                                <h3>Customer Campaign</h3>
                                <div className='d-flex'>
                                <h6>Allamcorper risus ultrices risus lorem vibero in</h6><img src={icon4} alt=""  style={{width:"10%",margin:'end'}} className=' ms-auto'/></div>                                <h6>pellentesque potenti more</h6>
                                
                            </div>

                        </div>
                    </div>
                    <div className='card  p-3 ' style={{color:'whitesmoke',background:"none"}} data-aos="fade-up">
                        <div className='d-flex over border rounded-4 p-2'>
                            <div><img src={icon3} alt=""  style={{width:"80%"}}/></div>
                            <div>
                                <h3 >ocial Boost</h3>
                                <div className='d-flex'>
                                <h6>Allamcorper risus ultrices risus lorem vibero in</h6><img src={icon4} alt=""  style={{width:"10%",margin:'end'}} className=' ms-auto'/></div>                                <h6>pellentesque potenti more</h6>
                                
                            </div>

                        </div>
                    </div>
                            
                            
           </div>
           </div>
         
            </div>
       

      

  )
}

export default Services
