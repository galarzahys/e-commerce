import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { actionTypes } from './context/reducer';
import { auth } from './firebase';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';
import { useStateValue } from './context/StateProvider';
import Checkout from './components/checkout/CheckOut';
import ResponsiveAppBar from './components/Header';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#000',
    },
  },
});


function App() {

  const [ {user}, dispatch ] = useStateValue(); 


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({
        type: actionTypes.SET_USER,
        user: user,

      })
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });}, [])



  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar/>
      <div className='main_container'>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/basket' element={<CheckoutPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegistrationPage />} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
