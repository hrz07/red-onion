import React from 'react';
import useFoods from '../../Hooks/useFoods';
import FoodCard from '../FoodCard/FoodCard';
import './Lunch.css'

const Lunch = () => {
    const [food, setFood] = useFoods()
    const lunchFoods = food.filter(item => item.category === 'lunch')
    
    return (
        <div className='lunchFoodContainer'>
            {
                 
                    lunchFoods.map(food=> <FoodCard key={food.id} food={food} ></FoodCard>)        
            }
        </div>
    );
}

export default Lunch;
