import Product from "./Product";

function ProductList(props) {
  return (
    <>
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.images}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </>
  );
}

export default ProductList;
