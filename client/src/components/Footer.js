import React from 'react'
import "./Footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Usama Bagwan</h4>
            <p>© {year} Usama Bagwan All rights reserved</p>
            <p className='d-flex'>

              <a href="https://linkedin.com/in/usama-bagwan"> <i className='fa-brands fa-linkedin'></i> </a>
              <a href="https://github.com/iusamahub"> <i className='fa-brands fa-github mx-3'></i> </a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, adipisci.</p>
            <p>usamaas100@gmail.com</p>
            <p>+91 8237713158</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer