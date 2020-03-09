import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllSales } from "../../redux/actions/sales/salesActions";

const SalesList = (props) => {
  const { fetchAllSales } = props;
  console.log(props);
  useEffect(() => {
    fetchAllSales();
  }, []);
  return (
    <div>
      <h1>Sales</h1>
    </div>
  );
};

const actions = {
  fetchAllSales
};

const mapStateToProps = (state) => {
  return {
    sales: state.sales
  };
};
export default connect(mapStateToProps, actions)(SalesList);
