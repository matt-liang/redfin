import React from "react";
import './component.css'

// Card component 
const HouseCard = ({ props }) => {
  return (
    <div className='house-card'>
      <div className="house-card-left">
        {props['ADDRESS']}, {props['ZIP OR POSTAL CODE']}
      </div>

      <div className="house-card-right">
        ${props['PRICE']}
      </div>

    </div>
  )
}

export default HouseCard;