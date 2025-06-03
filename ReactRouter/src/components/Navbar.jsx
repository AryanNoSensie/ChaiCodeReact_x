import React from 'react'
import logo from '../assets/react.svg'
import { NavLink , useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom' // for  routing 

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img src={logo} alt="cant find " />
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
         <NavLink to='/products'><li>Products</li></NavLink>
          <NavLink to='/about'><li>About</li></NavLink>
           <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button onClick={()=> navigate('/about')}>Get Started </button>
    </div>
  )
}

export default Navbar
