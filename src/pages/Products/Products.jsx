import { API_URL, QUERY_KEY_PRODUCTS } from "../../api/";
import Filter from "./components/Filter";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ProductList from "./components/ProductList";
import { useQuery } from "react-query";
import fetchData from "../../api/fetchData";  

function Products() {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_PRODUCTS, () => {
    return fetchData(API_URL, "products");
  });

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row">
        <Filter />
        <div className="col-9 flex-wrap d-flex justify-content-evenly">
          {isLoading && <Loader />}
          {isError && <Error />}
          {isSuccess && <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}

export default Products;
