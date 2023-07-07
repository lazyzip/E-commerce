import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div className="card col-2 mx-3 mb-5" style={{ background: "#F9DBEA" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#000000" }}>
          {props.name}
        </h5>
        <p className="card-text"></p>
        <Link
          to={`/products?categoryId=${props.id}`}
          className="btn btn-primary"
          style={{ background: "#FFB6C1", borderColor: "#FFB6C1" }}
        >
          Ir
        </Link>
      </div>
    </div>
  );
}

export default Category;
