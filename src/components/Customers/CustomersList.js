import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCustomers } from "../../redux/actions/customers/CustomersAction";
import LoadingComponent from "../Loading/LoadingComponent";
import CustomersListItem from "./CustomersListItem";

const CustomersList = (props) => {
  const { customers, fetchAllCustomers } = props;
  console.log(customers);
  useEffect(() => {
    fetchAllCustomers();
  }, []);
  return (
    <div>
      {customers && customers.length <= 0 ? (
        <LoadingComponent />
      ) : (
        <div>
          {customers.map((customer) => {
            return (
              <div key={customer.id}>
                <CustomersListItem customer={customer} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const actions = {
  fetchAllCustomers
};

const mapStateToProps = (state) => {
  return {
    customers: state.customers
  };
};
export default connect(mapStateToProps, actions)(CustomersList);
