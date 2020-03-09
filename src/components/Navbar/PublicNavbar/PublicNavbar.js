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

const PublicNavbarTabs = () => {
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
            <Typography className={classes.logo}>POS</Typography>
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
              label="Register"
              component={Link}
              to="/register"
            />
            <Tab
              className={classes.login}
              label="Login"
              component={Link}
              to="/login"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "60px" }}></div>
    </React.Fragment>
  );
};

export default PublicNavbarTabs;
