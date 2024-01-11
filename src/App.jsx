import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Checkout from './components/Checkout';
import Review from './components/Review';
import Header from './Header';


const App = () => {


  const [cart, setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element= {<Product/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/review' element={<Review />}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
