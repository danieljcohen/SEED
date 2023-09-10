import React from 'react' 
import { Link } from 'react-router-dom'
import "./CardItem.css"

export default function CardItem(props){
    /*
    Variable names: companyName, logo, location, bio, fundingAmount, equityOffered
    companyName: name of the company
    logo: image of the logo
    bio: company bio
    equity: percent
    price: asking price
    */
   return(
    <div className="card_item_border">
        <h1 className="card_item_company_name">{props.companyName}</h1>
        <img src={props.logo} className="card_item_logo"></img>
        <div className="location">
            <img src="./location.png"></img>
            <p className="card_item_location" id="locationimg">Location: {props.location}</p>
        </div>
        <p className="card_item_bio">{props.bio}</p>
        <h5 className="">Asking for ${props.fundingAmount} for {props.equityOffered}%</h5>
    </div>
   )
}