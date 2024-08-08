import React from 'react'
import se from './asserts/pr2.jpg'
import sec1 from './asserts/pr1.jpg'
import pr3 from"./asserts/pr3.jpg"
import pr4 from "./asserts/pr4.jpg"
import pr5 from './asserts/pr5.png'
const Allready = () => {

  return (
    <div style={{backgroundColor:"black",color:"white"}} className='container-fluid mt-0' >
      <h2 className='text-center p-2'> Already Weve Finished Those</h2>
      <h2 className='text-center p-2'>SEO Project</h2>
      <h4 className='text-center p-3'> Distinctively supply exceptional services after uniquely integrate </h4>
      <div className="row  ">
        <div className="col-lg-4 col-md-4 col-sm-12  col-12 mt-4 ">
            <div className='card ' style={{background:"none",color:"white"}} >
            <img src={se} alt=""  className='rounded-5 ' style={{height:'45vh'}} />
            </div>
        
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12  col-12 mt-4 ">
        <div className='card ' style={{background:"none",color:"white"}} >
            <img src={sec1} alt=""  className='rounded-5 ' style={{height:'45vh'}} />
            </div>
            
            
            </div>
           
        </div>
        <div className="row  md-5">
        <div className="container1 col-lg-4 mb-4 sm-12 col-12 card my-4 rounded-5" style={{background:"none",height:'45vh'}}>
              <img src={pr3} alt="Avatar" className="image rounded-5"  style={{height:'45vh'}}/>
              <div className="overlay rounded-5">
                <div className="text"> <h3 >SEO Consulting</h3></div>
                
              </div>
            </div>
        <div className="container1 col-lg-4 md-4 sm-12 col-12 card my-4 rounded-5" style={{background:"none",height:'45vh'}}>
              <img src={pr4} alt="Avatar" className="image rounded-5"  style={{height:'45vh'}}/>
              <div className="overlay rounded-5">
                <div className="text"> <h3 >SEO Consulting</h3></div>
                
              </div>
            </div>
           

            <div className="container1 col-lg-4 md-4 sm-12 col-12 card my-4 rounded-5" style={{background:"none",height:'45vh'}}>
              <img src={pr5} alt="Avatar" className="image "  style={{height:'45vh'}}/>
              <div className="overlay rounded-5">
                <div className="text"> <h3 >SEO Consulting</h3></div>
                
              </div>
            </div>
            
            
            </div>
           
        </div>
        

      
  
  )
}

export default Allready
