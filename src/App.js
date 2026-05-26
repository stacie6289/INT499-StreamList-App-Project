import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

import './App.css';


function App() {
  return ( 
    <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
