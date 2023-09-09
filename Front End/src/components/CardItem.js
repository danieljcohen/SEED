import React from 'react' 
import { Link } from 'react-router-dom'
import "./CardItem.css"

export default function CardItem(props){
    /*
    Variable names:
    companyName: name of the company
    logo: image of the logo
    bio: company bio
    equity: percent for price


    TO DO:
    ADD LOCATION, TAGS<
    ADD A CHAR LIMIT FOR BIO
    */
    return(
        <div className="card_item_border">
            <h1 className="card_item_company_name">{props.companyName}</h1>
            <img src={require('./google.png')} className="card_item_logo"></img>
            <p className="card_item_bio">{props.bio}</p>
            <h5 className="">Asking for {props.equity}</h5>
        </div>
    )
}