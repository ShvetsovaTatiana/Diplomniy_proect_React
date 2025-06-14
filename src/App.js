import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Registration from './pages/Registration';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
