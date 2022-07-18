import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {

  const [cartQuantity, setCartQuantity] = useState(0)

  const handleCartQuantity = () => {
    setCartQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <div className="container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}