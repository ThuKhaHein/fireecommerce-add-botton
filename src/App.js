import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ProductInfo from './pages/ProductInfo';
import RegisterPage from './pages/RegisterPage';

import './stylesheets/layout.css'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

            <Route path='/' exact element={<Homepage />} />
            <Route path='/login' exact element={<LoginPage />} />
            <Route path='/register' exact element={<RegisterPage />} />
            <Route path='/productinfo' exact element={<ProductInfo />} />
            <Route path='/cart' exact element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
