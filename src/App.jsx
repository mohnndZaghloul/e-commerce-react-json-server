import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from './store/slices/cartSlice';
import { Nav, Footer} from './components/index';
import { Home, Contactus, Cart, Details, Registration, Login, Profile } from './pages/index';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  },[dispatch])

  return (
    <div className='text-darkshadow-200'>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contactUs' element={<Contactus />} />
          <Route path='cart' element={<Cart />} />
          <Route path='logIn' element={<Login />} />
          <Route path='registration' element={<Registration />} />
          <Route path='details/:productID' element={<Details />} />
          <Route path='profile/:userID' element={<Profile />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
