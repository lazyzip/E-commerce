export async function fetchProductDetails(id) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
