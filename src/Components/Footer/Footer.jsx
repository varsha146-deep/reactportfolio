import React from 'react'
import './Footer.css'
import { CiUser } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>I am MEARN STACK developer</p>

        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
          
            <CiUser /><input type="text" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Varsha vinayan . All rights</p>
        <div className="footer-bottom-right">
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
