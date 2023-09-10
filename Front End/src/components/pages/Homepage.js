import { React, useEffect, useState } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import Cards from "../Cards.js"




function Homepage() {
    

    return (
        <div className = 'Wrappers'>
            <Cards />
            <div className='buttons'>
                <button>Previous Page</button>
                <button>Next Page</button>
            </div>
        </div>
    );
}

export default Homepage

