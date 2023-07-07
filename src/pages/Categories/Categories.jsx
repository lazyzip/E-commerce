import Category from "./components/Category";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../api/";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import fetchData from "../../api/fetchData";
import { useQuery } from "react-query";

function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, "categories");
  });

  return (
    <div className="container-fluid justify-content-evenly row my-5 mx-auto">
      <div className="row">
        {isLoading && <Loader />}
        {isError && <Error />}
        {isSuccess &&
          categories.map((category) => {
            return (
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Categories;
