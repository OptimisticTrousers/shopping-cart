import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/Store";

export default function App() {
  const [products, setProducts] = useState(() => []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <CartProvider>
        <Navbar />
        <main>
          <Outlet context={{products, loading, error}} />
          <Footer />
        </main>
      </CartProvider>
    </div>
  );
}
