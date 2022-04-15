import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='bannerBox'>
                <h1>Best food waiting for your belly</h1>
                <div className="searchBox">
                    <input type="text" placeholder='Search...' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
