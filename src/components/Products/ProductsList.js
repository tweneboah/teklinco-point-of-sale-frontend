import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/products/productsActions";
import ProductListItem from "./ProductListItem";
import LoadingComponent from "../Loading/LoadingComponent";

const ProductsList = (props) => {
  console.log(props);
  const { fetchAllProducts, products } = props;

  const fetchProducts = async () => {
    return await fetchAllProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products === [] ? (
        <LoadingComponent />
      ) : (
        <React.Fragment>
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductListItem product={product} />
                </div>
              );
            })}
        </React.Fragment>
      )}
    </div>
  );
};

const actions = {
  fetchAllProducts
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, actions)(ProductsList);
