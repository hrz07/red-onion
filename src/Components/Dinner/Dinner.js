import React from 'react';
import useFoods from '../../Hooks/useFoods';
import FoodCard from '../FoodCard/FoodCard';
import './Dinner.css'

const Dinner = () => {
    const [food, setFood] = useFoods()
    const dinnerFoods = food.filter(item => item.category === 'dinner')
    return (
        <div className='dinnerFoodContainer'>
            {
                dinnerFoods.map(food=> <FoodCard key={food.id} food={food} ></FoodCard>)
            }
        </div>
    );
}

export default Dinner;
