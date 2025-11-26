import React from 'react'
import './MyWork.css'
import theme_pattern1 from '../../assets/theme_pattern1.jpg'
import mywork_data from '../../assets/MyWork_data.js'
import arrow_icon from '../../assets/arrow_icon.jpg'

function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern1} className='theme' alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work,index) => (
          <div key={index} className="work-card">
            
            <div className="image-wrapper">
              <img className='cookie' src={work.w_img} alt="" />

              {/* Live demo button on the image */}
              <button
                className="live-btn"
                onClick={()=>window.open(work.w_link, "_blank")}
              >
                Live Demo
              </button>
            </div>
           

            <p>{work.w_name}</p>
          </div>
        ))}

        <div className="my-work-showmore">
          <p>Show More</p>
          <img src={arrow_icon} className='arrow' alt="" />
        </div>
      </div>
    </div>
  )
}

export default MyWork