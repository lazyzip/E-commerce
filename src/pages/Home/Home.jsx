import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="hero-container bg-light text-center py-5">
      <h1 className="display-4">Bienvenido a nuestra tienda en línea</h1>
      <p className="lead">Explora nuestra amplia selección de productos</p>
      <Link to="/products" className="btn btn-primary btn-lg btn-rosa-pastel">
        Ver productos
      </Link>
    </div>
  );
}

export default Home;
