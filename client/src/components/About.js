import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className="container mb3 about_container" style={{minHeight: "100%"}}>
      <div className="container main_container d-flex justify-content-between flex-wrap">
        <div className="left_container" style={{width: 500, marginTop:"95px"}}>
          <h2>Meet Usama Bagwan</h2>
          <p style={{ color: "#666", letterSpacing: "0.5px", marginTop: 2, lineHeight: 2}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nam quibusdam! Ipsam ex culpa autem iusto dolore, exercitationem iure odio neque corrupti, nulla dicta porro a numquam, mollitia corporis eius dignissimos cumque perferendis. Illo nesciunt nisi fuga esse, eum natus quidem delectus, odio beatae iste odit quis, rem unde labore?</p>
        </div>
        <div className="right_container mt-5">
          <img src="logo512.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About