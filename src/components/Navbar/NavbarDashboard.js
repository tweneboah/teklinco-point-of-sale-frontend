import React, { useEffect } from "react";
import { connect } from "react-redux";
import PublicNavbarTabs from "./PublicNavbar/PublicNavbar";
import PrivateNavbar from "./PrivateNavbar/PrivateNavbar";
import {
  setCurrentUser,
  logout
} from "../../redux/actions/userAuth/userAuthActions";
const NavbarDashboard = (props) => {
  const { setCurrentUser, currentUser, logout } = props;

  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);
  return (
    <div>
      {currentUser === null ? (
        <PublicNavbarTabs />
      ) : (
        <PrivateNavbar logout={logout} />
      )}

      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
};

const actions = {
  logout,
  setCurrentUser
};

const mapstateToprops = (state) => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapstateToprops, actions)(NavbarDashboard);
