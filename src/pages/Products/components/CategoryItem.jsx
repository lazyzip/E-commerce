import { useState } from "react";
import { useLocation } from "react-router-dom";

function CategoryItem(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");

  const [isChecked, setIsChecked] = useState(
    categoryId === props.id.toString()
  );

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id={props.id}
      />
      <label className="form-check-label stretched-link" htmlFor={props.id}>
        {props.name}
      </label>
    </li>
  );
}

export default CategoryItem;
