import React from 'react';
import './FoodCard.css'

const FoodCard = ({food}) => {
    return (
        <div className='foodCardContainer'>
            <img src={food.image} alt="" />
            <h3>{ food.title}</h3>
            <h1>${food.price}</h1>
            <button className='detailsBtn'>Details</button>
        </div>
    );
}

export default FoodCard;
