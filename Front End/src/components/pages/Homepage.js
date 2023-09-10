import { React, useEffect, useState } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import Cards from "../Cards.js"




function Homepage() {
    

    return (
        <div className = 'Wrappers'>
            <Cards />
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    );
}

export default Homepage

