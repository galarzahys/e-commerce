import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import CheckoutPage from './pages/CheckoutPage';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className='main_container'>
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
