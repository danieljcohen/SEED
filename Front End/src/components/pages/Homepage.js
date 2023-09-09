import { React, useEffect, useState } from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import Cards from "../Cards.js"

import getSnapshot from './firebase';


function Homepage() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const dataFromDB = getSnapshot()
        setData(dataFromDB);
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <div>
            <Cards />
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    );
}

export default Homepage

