import { React, useEffect } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import Cards from "../Cards.js"


function Homepage() {
    return (
        <div>
            <Cards />
        </div>
    );
}

export default Homepage

