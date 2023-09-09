import React from 'react'
import CardItem from './CardItem'
import './Cards.css' 

function Cards(){
    /*
    companyName: name of the company
    logo: image of the logo
    bio: company bio
    equity: percent for price
    */
    return (
        <div className="main-container">
            <h1>Businesses</h1>
            <div classname="cards">
                <CardItem companyName="Google" logo='./google.png' bio = "bla bla bla google bio goes here and this has to be longer so im typing" equity = "10% for 3 bucks" />
            </div>
        </div>
    )
}

export default Cards