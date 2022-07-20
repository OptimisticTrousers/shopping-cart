import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useContext } from "react";

export const QuantityContext = React.createContext()

export default function App() {

  const [cartQuantity, setCartQuantity] = useState(0)

  const handleCartQuantity = () => {
    setCartQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <div className="container">
      <QuantityContext.Provider value={cartQuantity}>
        <Navbar />
      </QuantityContext.Provider>
      <main>
        <QuantityContext.Provider value={handleCartQuantity}>
          <Outlet />
        </QuantityContext.Provider>
      </main>
      <Footer />
    </div>
  );
}