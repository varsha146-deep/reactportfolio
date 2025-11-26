import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'
import theme_pattern1 from '../../assets/theme_pattern1.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern1} className='theme' alt="" />
        </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} className='profile' alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>"Hi! I'm Varsha a MERN Stack intern passionate about creating interactive and user-friendly web applications. I'm currently gaining hands-on experience by working on projects and sharpening my development skills.</p>
                <p>I like learning new technologies and continuously improving my development skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Html & Css</p><hr  style={{width:"80%"}}/></div>
                <div className="about-skill"><p>React</p><hr  style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Node.js</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>MongoDB.js</p><hr  style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Git&GitHub</p><hr  style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Bootstrap</p><hr  style={{width:"70%"}}/></div>
               
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            
            <h1>6 Month</h1>
            <p>  Learning Experience</p>
           
        </div>
        <hr/>
        <div className="about-achievement">
            
            <h1>4+</h1>
            <p>PROJECT COMPLETED</p>
           
        </div>
         <hr/>
         <div className="about-achievement">
            
            <h1></h1>
           <h1>MEARN</h1>
            <p> STACK Developer</p>
           
        </div>
         <hr/>
         
      </div>
    </div>
  )
}

export default About
