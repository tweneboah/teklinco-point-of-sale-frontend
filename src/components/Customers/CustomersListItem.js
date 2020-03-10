import React from "react";

const CustomersListItem = (props) => {
  const { customer } = props;
  return (
    <div>
      <h1>{customer.name}</h1>
      <h3>{customer.gender}</h3>
      <h4>{customer.phoneNumber}</h4>
      <h4>{customer.address}</h4>
      <hr />
    </div>
  );
};

export default CustomersListItem;
