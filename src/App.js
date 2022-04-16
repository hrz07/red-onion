import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route path='/breakfast' element={<Breakfast></Breakfast>} />
          <Route path='/' element={<Lunch></Lunch>} />
          <Route path='/dinner' element={<Dinner></Dinner>} />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
