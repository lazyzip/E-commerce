import { Link } from "react-router-dom";
import "./product.css";

function Product(props) {
  const handleBuy = () => {
    console.log(`Producto comprado: ${props.title}`);
  };

  return (
    <div className="card col-3 mx-1 mb-5 border-0">
      <Link to={`/products/${props.id}`} className="btn text-start">
        <div className="card-img-container">
          <img src={props.image} className="card-img-top rounded-0" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title mt-2 fw-bold">{props.title}</h5>
          <p className="card-text">${props.price}</p>
        </div>
      </Link>
      <button
        className="btn btn-primary btn-sm btn-comprar"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
}

export default Product;
