import React, { useRef } from 'react'
import './Navbar.css'



function Navbar() {
 
  return (
    <div className='navbar'>
     
        <ul  className="nav-menu">
   
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
