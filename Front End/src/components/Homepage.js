import React, { useEffect, useState } from 'react';
import './Homepage.css';
import{ Link } from 'react-router-dom';


function Homepage() {
    return (
        <>
            <div className="image-contaner">
                <div className="vid-container">
                    <video src = "/hd0992.mov" autoPlay loop muted />
                </div>
                <div className="info">
                    WE FOCUS ON PROVIDING RISK-AVERSE INVESTMENT SOLUTIONS BY UTILIZING 
                    DISRUPTIVE TECHNOLOGY TO MAXIMIZE VALUE AND DRIVE RETURNS PRIMARILY
                    IN DIGITAL INFRASTRUCTURE.
                </div>
                <div className="home-button">
                    <Link to="/about">
                        <button type="button" class="button">
                            <div className="button-text">
                            LEARN MORE ABOUT US
                            </div>
                         
                        </button>  
                    </Link> 
                </div>
                         
            </div>
                
            
        </>
    );
}

export default Homepage

