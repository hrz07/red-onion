import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useFoods from '../../Hooks/useFoods';
import './Home.css'

const Home = () => {

    const [food, setFood] = useFoods()
    
    return (
        <div>
            <div className='bannerBox'>
                <h1>Best food waiting for your belly</h1>
                <div className="searchBox">
                    <input type="text" placeholder='Search...' />
                    <button>Search</button>
                </div>
            </div>

            <div className='food-options'>
                <NavLink to="/breakfast">Breakfast</NavLink>
                <NavLink to="/">Lunch</NavLink>
                <NavLink to="/dinner">Dinner</NavLink>
            </div>
            

                <Outlet className='out' />
            
        </div>
    );
}

export default Home;
