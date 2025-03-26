import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Jennifer Cheung</h1>
                <p>RAAAAAAAAAAAAAHHHHHHHHHHH</p>
                <div className="quick-buttons">
                    <button className="projects-btn"><Link to="/portfolio" style={{ textDecoration: 'none' }}>Projects</Link></button>
                    <button className="resume-btn">Resume</button>
                </div>
            </div>
            <div className="home-picture">
                <img className='profile-img' src={require("../../assets/Jennifer Cheung.jpg")} alt={"Jennifer Cheung"} />
            </div>
        </div>
    ); 
}; 

export default Home; 