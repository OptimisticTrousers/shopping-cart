import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/Store";

export default function App() {

  const [products, setProducts] = useState(() => [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

  return (
    <div className="container">
      <CartProvider>
        <Navbar />
        <main>
          <Outlet context={products}/>
          <Footer />
        </main>
      </CartProvider>
    </div>
  );
}