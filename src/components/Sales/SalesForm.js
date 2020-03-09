import React from "react";
import { TextField, Button } from "@material-ui/core";
const SalesForm = () => {
  return (
    <div>
      {/* Customer form input */}
      <div style={{ marginBottom: "20px" }}>
        <TextField placeholder="Anonymous Customer" />
        <button>Add Customer</button>
      </div>
      {/* Select date */}
      <div style={{ marginBottom: "20px" }}>
        Select Date:
        <input type="date" />
      </div>
      {/* Add Product button */}
      <div style={{ marginBottom: "20px" }}>
        <Button variant="contained">Add Product</Button>
      </div>

      {/* Product Buying List */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Qty</th>
              <th>price</th>
              <th>subTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>phone</td>
              <td>2</td>
              <td>200</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesForm;
