import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
    <div className="container home_container">
        <div className="home_innerdiv">
            <div className="left_div">
                <h2>Welcome to <span style={{color: "#6c63ff"}}>Usama Bagwan</span></h2>
                <p style={{color: "#666", letterSpacing: "0.5px", marginTop: 2}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, perferendis placeat quidem aut dolores consequuntur nulla! Facilis veniam non possimus numquam, accusamus repudiandae asperiores quibusdam est blanditiis commodi, necessitatibus ad! Quam et recusandae est modi accusamus amet blanditiis quia sequi, architecto laudantium velit, veritatis quasi similique quas nam voluptatibus magni?
                </p>
                <div className="btn_div mt-4">
              {/* <Button variant="danger" style={{letterSpacing: "1px", border:"none", borderRadius:4, background:"#2f2d69", marginRight:24 }}>Resume</Button>{' '} */}
              {/* <Button variant="danger" style={{letterSpacing: "1px", border:"none", borderRadius:4, background:"#2f2d69", marginRight:24 }}>YouTube</Button>{' '} */}
                </div>
            </div>
            <div className="right_div">
                <img src="logo192.png" alt="image" />
            </div>
        </div>
    </div>
    </>
  )
}


export default Home