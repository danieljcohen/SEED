import React from 'react'
import CardItem from './CardItem'
import './Cards.css' 
import dbData from './pages/firebase'

function Cards(){
    /*
    companyName: name of the company
    logo: image of the logo
    bio: company bio
    equity: percent for price
    */
   //const companies = dbData.map(data => {
   //return <CardItem companyName = {data.companyName} />
   //})
    return (
        <div className="cards">
            <h1>Businesses</h1>
            <div>
                
            </div>
        </div>
    )
}

export default Cards