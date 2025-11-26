import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import resume from "../../assets/VARSHA_VINAYAN (2).pdf"


function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} className='img' alt="" />
        <h1><span>I'm Varsha Vinayan,</span> MEARN STACK Developer</h1>
        <p>I specialize in building responsive and modern web interface using reacts js and clean UI design Principle</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume" onClick={()=>window.open(resume,"VARSHA_VINAyaN(2).PDF")}>My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
