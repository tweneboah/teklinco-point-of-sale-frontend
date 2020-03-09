import React, { useState } from "react";
import {
  Tabs,
  Tab,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    login: {
      borderRadius: "30px",
      marginRight: "20px",
      marginLeft: "50px",
      background: "#512b58",
      fontSize: "1.1rem"
    },
    linkItems: {
      color: "white",
      fontSize: "1.1rem",
      "&:hover": {
        color: "#79bac1"
      }
    }
  };
});

const PrivateNavbar = (props) => {
  const { logout } = props;
  const classes = useStyles();
  const [tabsValue, setTabsValue] = useState(0);

  //TAB HandleChange
  const tabHandleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          {/* Logo */}
          <Button>
            <Typography className={classes.logo}>GGF</Typography>
          </Button>

          {/* Tabs */}
          <Tabs value={tabsValue} onChange={tabHandleChange}>
            <Tab
              className={classes.linkItems}
              label="Home"
              component={Link}
              to="/"
            />
            <Tab
              className={classes.linkItems}
              label="Products"
              component={Link}
              to="/products"
            />
            <Tab
              className={classes.linkItems}
              label="Sales"
              component={Link}
              to="/sales"
            />

            <Tab
              className={classes.linkItems}
              label="Reports"
              component={Link}
              to="/reports"
            />
            <Tab
              className={classes.linkItems}
              label="Customers"
              component={Link}
              to="/customers"
            />
            <Tab
              className={classes.linkItems}
              label="Dashboard"
              component={Link}
              to="/dashboard"
            />
            <Tab
              className={classes.login}
              button="true"
              label="Logout"
              onClick={() => logout()}></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "60px" }}></div>
    </React.Fragment>
  );
};

export default PrivateNavbar;
