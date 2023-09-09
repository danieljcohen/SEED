
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
  

  let companies = null;

  if (dataFromDB.length > 0) {
    // Map the fetched data to JSX elements when dataFromDB has data
    companies = dataFromDB.map((company) => (
      <CardItem
        logo={company.Image}
        Location={company.Location}
        bio={company.bio}
        fundingAmount={company.fundingAmount}
        equityOffered={company.equityOffered}
      />
    ));
    console.log("companies: "+companies);
  }
    return (
        <div className="main-container">
            <h1>Businesses</h1>
<<<<<<< HEAD
            <div>
                {companies}
=======
            <div classname="cards">
                <CardItem companyName="Google" logo='./google.png' bio = "bla bla bla google bio goes here and this has to be longer so im typing" equity = "10% for 3 bucks" />
>>>>>>> c652586a02099197830e64e917cbdd7b0b55ef1e
            </div>
        </div>
    )
}

export default Cards