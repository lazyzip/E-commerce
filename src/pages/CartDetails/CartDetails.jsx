import React, { useState, useEffect } from "react";
import { fetchProductDetails } from "../Products/ProductDetails/api";

function CartDetails() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("https://fakeapi.platzi.com/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const renderProductDetails = async (productId) => {
    try {
      const product = await fetchProductDetails(productId);
      return (
        <div className="card mb-3" key={product.id}>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">Price: {product.price}</p>
            <p className="card-text">Description: {product.description}</p>
            <p className="card-text">Category: {product.category.name}</p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Detalles del carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito esta vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>{renderProductDetails(item.productId)}</div>
          ))}
          <h3 className="mt-3">Total: {calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
}

export default CartDetails;
