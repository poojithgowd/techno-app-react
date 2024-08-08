import React, { useEffect, useState } from 'react';

import pic1 from '../asserts/hat man.png';
import pic2 from '../asserts/man with laptop.png';
import pic3 from '../asserts/digital seo citcle.png';

const Banner = () => {
  const [count, setCount] = useState(0);
  const target = 40;
  const duration = 1000; // Duration in milliseconds
  const increment = target / 100; // Adjust speed by changing this value
  const stepTime = Math.abs(Math.floor(duration / target));

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [increment, stepTime, target]);

  return (
    <div className='bannerbg container-fluid' >
      <div className="row ">
        <div className="col-lg-6 col-md-12 col-sm-12  col-12 align-self-center px-5 pt-5 mt-5">
          <div className="card bordernone" style={{ background: 'none' }}>
            <h1 className='text-light display-1 fw-bold'>Start Achieving</h1>
            <h1 className='mt-1' style={{ color: 'rgb(181, 252, 98)' }}>SEO Goals</h1>
            <h6 className='mt-1 text-light'>
              Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives.
            </h6>
            <button className="btn btn-success p-2 mt-3 mulcol" type="submit" style={{ width: "20vh" }}>Get Started</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 ">
          <div className="card px-5 mt-3 bordernone" style={{ background: "none", color: "white" }}>
            <div >
              <img src={pic1} alt="" style={{ width: "80%" }} />
              <div>
                <img src={pic3} alt="" style={{ position: "absolute", top: "1px", left: "60%", width: "20%", marginTop: "15%" }} className="rotating-image" />
              </div>
            </div>
            <div className='d-flex justify-content-evenly m-3 flex-wrap'>
              <div className='my-2 '><img src={pic2} alt=""  style={{width:"80%"}}/></div>
              <div className='my-4 m-1'>
                <h2>{count}K +</h2>
                seo Campaign
              </div>
              <div className='my-4 m-1'>
                <h2>87%</h2>
                Sales Increment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
