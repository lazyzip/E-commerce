import { useQuery } from "react-query";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../../api/";
import CategoryItem from "./CategoryItem";
import fetchData from "../../../api/fetchData";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import "./CategoryList.css";

function CategoryList() {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, "categories");
  });

  return (
    <>
      <h2>Categorías</h2>
      <ul className="list-group">
        {isLoading && <Loader />}
        {isError && <Error />}
        {isSuccess &&
          categories.map((category) => {
            return (
              <CategoryItem
                key={category.id}
                id={category.id}
                name={category.name}
              />
            );
          })}
      </ul>
    </>
  );
}

export default CategoryList;
