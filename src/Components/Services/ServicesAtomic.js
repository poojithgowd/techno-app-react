import React from 'react'

const ServicesAtomic = () => {
  return (
    <div className='container-fluid bg-secondary text-light'>
<div id="carouselExampleInterval" className="carousel slide container " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="50000">
    <div className='d-flex p-3 px-5 justify-content-around'>
     
     <h3 className='px-5 mx-5 atomhover'>SEO </h3>
     <h3 className='px-5 mx-5 atomhover'>Yodgy</h3>
     <h3 className='px-5  mx-5 atomhover'>Boosterio</h3>
     <h3 className='px-5 mx-5 atomhover'>Ibm </h3>
     <h3 className='px-5  mx-5 atomhover'>Geen </h3>

     </div>
      {/* <img src="..." class="d-block w-100" alt="..."> */}
    </div>
    <div className="carousel-item" data-bs-interval="50000">
    <div className='d-flex p-3 px-5  justify-content-around'>
     
     <h3 className='px-5  mx-5 atomhover'>Yodgy </h3>
     <h3 className='px-5  mx-5 atomhover'>Boosterio</h3>
     <h3 className='px-5 mx-5 atomhover'>Ibm</h3>
     <h3 className='px-5 mx-5 atomhover'>Geen </h3>
     <h3 className='px-5 mx-5 atomhover'>SEO </h3>

     </div>
      {/* <img src="..." class="d-block w-100" alt="..."> */}
    </div>
    <div className="carousel-item">
    <div className='d-flex p-3 px-5 justify-content-around '>
     
     <h3 className='px-5 mx-5 atomhover'>Boosterio </h3>
     <h3 className='px-5 mx-5 atomhover'>Ibm</h3>
     <h3 className='px-5 mx-5 atomhover'>Geen</h3>
     <h3 className='px-5 mx-5 atomhover'>SEO </h3>
     <h3 className='px-5 mx-5 atomhover'>YODGY </h3>
     <h3 className='px-5 mx-5 atomhover'>Automic</h3>  

     </div>
      {/* <img src="..." class="d-block w-100" alt="..."> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>
      
    </div>
  )
}

export default ServicesAtomic
