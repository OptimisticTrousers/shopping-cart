import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './components/Shop';
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/TOP-shopping-cart" element={<App />} >
        <Route index element={<Home />} />
        <Route path="/TOP-shopping-cart/shop" element={<Shop />} />
          <Route path="/TOP-shopping-cart/shop/:id" element={<ProductDetail />} />
        <Route path="/TOP-shopping-cart/cart" element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
