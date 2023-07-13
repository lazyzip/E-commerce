import { useState } from "react";
import { useQuery } from "react-query";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../../api/";
import CategoryItem from "./CategoryItem";
import fetchData from "../../../api/fetchData";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import "./CategoryList.css";

function CategoryList() {
  const [filters, setFilters] = useState({
    title: "",
    categoryId: "",
    priceMin: "",
    priceMax: "",
  });

  const handleFilterChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
    isSuccess: categoriesSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, "categories");
  });

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
    isSuccess: productsSuccess,
  } = useQuery(["products", filters], async () => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/products?${queryParams}`);
    const data = await response.json();
    return data;
  });

  return (
    <div className="category-list bg-light p-4">
      <h2 className="text-pink">Categorías</h2>
      <ul className="list-group">
        {categoriesLoading && <Loader />}
        {categoriesError && <Error />}
        {categoriesSuccess &&
          categories.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              name={category.name}
              handleFilterChange={handleFilterChange}
            />
          ))}
      </ul>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Título:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={filters.title}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priceMin" className="form-label">
          Precio mínimo:
        </label>
        <input
          type="text"
          id="priceMin"
          name="priceMin"
          value={filters.priceMin}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="priceMax" className="form-label">
          Precio máximo:
        </label>
        <input
          type="text"
          id="priceMax"
          name="priceMax"
          value={filters.priceMax}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>

      {productsLoading && <Loader />}
      {productsError && <Error />}
      {productsSuccess &&
        products
          .filter((product) =>
            filters.title
              ? product.name &&
                product.name.toLowerCase().includes(filters.title.toLowerCase())
              : true
          )
          .map((product) => <div key={product.id}>{product.name}</div>)}
    </div>
  );
}

export default CategoryList;
