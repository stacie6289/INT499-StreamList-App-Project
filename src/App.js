import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

import './App.css';


function App() {
  return ( 
    <div>
      <h1>StreamList Home</h1>

      <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<StreamList />} />
            <Route path='/' element={<Movies />} />
            <Route path='/' element={<Cart />} />
            <Route path='/' element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
