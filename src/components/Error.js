// ErrorComponent.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/optimistictrousers.jpg";

export default function Error({ message = "Oops! Something went wrong." }) {
  return (
    <div className="error">
      <div className="error__container">
        <img className="error__image" src={logo} alt="smiling pair of pants" />
        <h2 className="error__number">The Optimistic Store</h2>
        <hr className="error__break" />
        <p className="error__message">{message}</p>
        <Link className="error__link" to="/">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
}
