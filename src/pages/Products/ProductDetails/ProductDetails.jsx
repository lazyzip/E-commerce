import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductDetails } from "./api";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["productDetails", id], () =>
    fetchProductDetails(String(id))
  );

  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details</div>;
  }

  const handleBuy = async () => {
    setIsAddingToCart(true);
    try {
      const response = await fetch("https://fakeapi.platzi.com/cart", {
        method: "POST",
        body: JSON.stringify({ productId: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert(`Product added to cart: ${data.title}`);
      } else {
        throw new Error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Product Details</h1>
      <div className="card" style={{ background: "#F3EFEF" }}>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="card-text">Price: {data.price}</p>
          <p className="card-text">Description: {data.description}</p>
          <p className="card-text">Category: {data.category.name}</p>
          <div className="row">
            {data.images.map((image) => (
              <div className="col-md-4" key={image}>
                <img
                  src={image}
                  alt="Product Image"
                  className="img-fluid mb-3"
                />
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary"
            style={{ background: "#A8C7BB", borderColor: "#A8C7BB" }}
            onClick={handleBuy}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? "Adding to Cart..." : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
