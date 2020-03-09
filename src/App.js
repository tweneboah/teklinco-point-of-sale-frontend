import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Theme from "./config/Theme";
import NavbarDashboard from "./components/Navbar/NavbarDashboard";
import LoginForm from "./components/Users/Login/LoginForm";
import RegistrationForm from "./components/Users/Register/RegistrationForm";
import ProductsList from "./components/Products/ProductsList";
import CustomersList from "./components/Customers/CustomersList";
import SalesList from "./components/Sales/SalesList";
import SalesForm from "./components/Sales/SalesForm";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <NavbarDashboard />
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/customers" component={CustomersList} />

            <Route exact path="/sales" component={SalesForm} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
