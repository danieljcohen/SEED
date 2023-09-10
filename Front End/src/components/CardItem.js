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
    return (
        <div className="card_item_border">
          <h1 className="card_item_company_name">{props.name}</h1>
          <img src={props.logo} className="card_item_logo" alt="Company Logo" />
          <p className="card_item_location">Location: {props.location}</p>
          <p className="card_item_bio">Bio: {props.bio}</p>
          <h5 className="">Asking for ${props.fundingAmount} for {props.equityOffered}%</h5>
        </div>
      );
    
}