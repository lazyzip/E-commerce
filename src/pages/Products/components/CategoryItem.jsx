import React, { useState } from "react";

function CategoryItem(props) {
  const [isChecked, setIsChecked] = useState(props.checked || false);

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
