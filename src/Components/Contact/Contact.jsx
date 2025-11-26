import React from 'react'
import './Contact.css'
import theme_pattern1 from '../../assets/theme_pattern1.jpg'
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div className='contact'>
        <div id='contact' className="contact-title">
            <h1>Get In touch</h1>
            <img src={theme_pattern1} className='theme' alt="" />
        </div>
        <div className="contact_section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>"MERN stack intern. Learning, building, and improving. Open to opportunities and projects."</p>
               <div className="contact-details">
                <div className="contact-detail">
                <p><MdEmail />varshavinayan146@gmail.com</p>

               </div>
               <div className="contact-detail">
                <p><IoIosCall />+919496523123</p>

               </div>
               <div className="contact-detail">
                <p><FaLocationDot /> kerala,kochi</p>
                
               </div>
            </div>
            <div className="contact-detail">
               <p> <FaGithub onClick={()=>window.open("https://github.com/")} />GitHub </p>
                   

            </div>
            <div className="contact-detail">
               <p> <FaLinkedin />Linkedin</p>
            </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text"placeholder='Enter your name' name="name"  />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message"rows='8' placeholder='Enter your message' id=""></textarea>
            <button className='contact-submit'>Submit now</button>
           
        </form>
      </div>
    </div>
  )
}

export default Contact
