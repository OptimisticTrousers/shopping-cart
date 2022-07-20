import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartQuantityProvider } from "./context/QualityContext";

export default function App() {

  return (
    <div className="container">
      <CartQuantityProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </CartQuantityProvider>
      <Footer />
    </div>
  );
}