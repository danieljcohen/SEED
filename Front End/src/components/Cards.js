
import CardItem from './CardItem'
import './Cards.css' 
import dbData from './pages/firebase'
import getSnapshot from './pages/firebase';
import { React, useEffect, useState } from 'react';
function Cards(){
    
    const [dataFromDB, setDataFromDB] = useState([]);

   
    useEffect(() => {
        // Define an async function and call it immediately
        (async () => {
          try {
            const response = await getSnapshot(); // Replace with your data fetching function
            setDataFromDB(response || []); // Initialize as an empty array if response is undefined
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        })();
      }, []);
  


    // Map the fetched data to JSX elements when dataFromDB has data
    /* companyName, logo, location, bio, fundingAmount, equityOffered */
    const companies = dataFromDB.map((company) => (
      <CardItem
        companyName={company.companyName}
        logo={company.Image}
        location={company.Location}
        bio={company.bio}
        fundingAmount={company.fundingAmount}
        equityOffered={company.equityOffered}
      />
    ));
    console.log("companies: "+companies);
    return (
        <div className="main-container">
            <h1>Businesses</h1>
    
            <div classname="cards">
                {companies}
            </div>
        </div>
    );
}

export default Cards