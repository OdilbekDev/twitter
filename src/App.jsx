import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Recommendation from './components/recommendation/Recommendation';
import Explore from './pages/explore/Explore';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/explore' element={<Explore />}/>
    </Routes>
      <Recommendation />
    </div>

    
    </>
  );
}

export default App;