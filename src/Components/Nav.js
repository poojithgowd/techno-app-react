import React, { useEffect, useState } from 'react'
import logo from "../asserts/logo2-1.png"
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const [bgColor, setBgColor] = useState('bg-dark');

  useEffect(() => {
    // const navigate = useNavigate();
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change the background color class based on scroll position
      if (scrollY > 80) {
        setBgColor('bg-dark');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const Home = () => {
  //   navigate('');
  // }


  return (
    <div className='sticky-top'>
  <nav className={`navbar navbar-expand-lg container-fluid ${bgColor}`} style={{position:'absolute'}} >
     <div className="container p-3  " >
    <a className="navbar-brand " href="#"><img src={logo} alt="" style={{}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-primary"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ms-auto my-lg-0 navbar-nav-scroll"  >
        <li className="nav-item ">
          <Link to='/'className='nav-link  bold  mx-2'>Home</Link>
        </li>
        <li className="nav-item "  >
          <a className="nav-link bold mx-2" href="#">Company</a>
        </li>
        <li className="nav-item ">
          <Link to='/Services'className='nav-link bold mx-2'>Services</Link>
        </li>
        <li className="nav-item ">
        <Link to='/Plan'className='nav-link bold mx-2'>Pages</Link>
        </li>
        <li className="nav-item ">
          <a className="nav-link bold mx-2" href="#">Elements</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link bold mx-2" href="#">Blog</a>
        </li>
        <li className="nav-item  ">
        <Link to='/Contact'className='nav-link bold mx-2'>Contact</Link>
        </li>
        </ul>

      <form className="d-flex m-2" role="search">
        <button className="btn btn-outline-success bold" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
    
  )
}

export default Nav







