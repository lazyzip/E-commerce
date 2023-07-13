import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery(["productDetails", id], async () => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data;
  });

  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleBuy = () => {
    setIsAddingToCart(true);

    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualizar la cantidad y el precio total
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
        totalPrice: existingItem.totalPrice + productData.price,
      };

      const updatedCart = cartItems.map((item) =>
        item.id === id ? updatedItem : item
      );

      setCartItems(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo como un nuevo elemento
      const newItem = {
        id: id,
        title: productData.title,
        quantity: 1,
        totalPrice: productData.price,
      };

      setCartItems([...cartItems, newItem]);
    }

    setIsAddingToCart(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Detalles del producto</h1>
      <div className="card" style={{ background: "#FDD7E4" }}>
        <div className="card-body">
          <h2 className="card-title text-pink">{productData.title}</h2>
          <p className="card-text">Precio: {productData.price}</p>
          <p className="card-text">Descripción: {productData.description}</p>
          <p className="card-text">Categoría: {productData.category.name}</p>
          <img
            src={productData.images[0]}
            alt="Product Image"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px", height: "auto" }}
          />
          <button
            className="btn btn-primary"
            style={{ background: "#FDB9D8", borderColor: "#FDB9D8" }}
            onClick={handleBuy}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? "Adding to Cart..." : "Comprar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
