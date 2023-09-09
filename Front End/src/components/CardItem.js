import React from 'react' 
import { Link } from 'react-router-dom'

export default function Card(){
    return(
        <div>
            <li className="cards_item">
                <Link className="cards_item_link">
                    <figure className="cards_item_pic-wrap">
                        <img 
                        src = "/" alt="Logo Image"
                        className = "cards_item_img"
                        >
                        </img>
                    </figure>
                    <div className="cards_item_info">
                        <h5 className='cards_item_text'></h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}