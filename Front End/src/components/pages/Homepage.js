import { React, useEffect } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';


function Homepage() {
    useEffect(() => {
        document.title = "R1649";  
    }, []);

    return (
        <>
            <div className="Homepage-container">
                
            </div>
        </>
    );
}

export default Homepage

