import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Shop from './components/Shop';
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const URL = process.env.PUBLIC_URL;
root.render(
  <React.StrictMode>
    <HashRouter >
    <Routes>
      <Route path={URL + "/"} element={<App />} >
        <Route index element={<Home />} />
        <Route path={URL + "/shop"} element={<Shop />} />
          <Route path={URL + "/shop/:id"} element={<ProductDetail />} />
        <Route path={URL + "/cart"} element={<Cart />} />
      </Route>
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
