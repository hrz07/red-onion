import React from 'react';
import useFoods from '../../Hooks/useFoods';
import Foodcard from '../FoodCard/FoodCard';
import './Breakfast.css'

const Breakfast = () => {

    const [food, setFood] =  useFoods()
    const breakfastFoods = food.filter(item => item.category === 'breakfast')
    

    return (
        <div className='breakfastContainer'>
            {
                breakfastFoods.map(food=> <Foodcard key={food.id} food={food} ></Foodcard>)
            }
        </div>
    );
}

export default Breakfast;
