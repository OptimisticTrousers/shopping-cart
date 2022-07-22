import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/Store";

export default function App() {

  return (
    <div className="container">
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
          <Footer />
        </main>
      </CartProvider>
    </div>
  );
}