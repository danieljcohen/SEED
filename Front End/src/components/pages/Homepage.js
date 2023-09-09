import { React, useEffect } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import Cards from "../Cards.js"


function Homepage() {
    return (
        <div className="Homepage-container">
            <Cards />
            <div className="buttons">
                <button class="button">Previous Page</button>
                <button class="button">Next Page</button>
            </div>
        </div>
    );
}

export default Homepage

