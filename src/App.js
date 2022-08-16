import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='main_container'>
      <ProductsPage />
      </div>
      
      {/* <ProductCard /> */}
    </div>
  );
}

export default App;
