import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import { Wrapper, ImageLogo } from "./style";
export default props => {
  const logo = (
    <a href="/">
      <ImageLogo src="images/logo_transparent_background.png" width="100px;" />
    </a>
  );
  return (
    <Navbar brand={logo} centerLogo fixed alignLinks="right">
      <NavItem>
        <Link to="/login">Login </Link>
      </NavItem>
      <NavItem>
        <Link to="/register">Register </Link>
      </NavItem>
    </Navbar>
    //   <div className="row container">
    //     <p className="grey-text text-lighten-2 lighten-3">
    //       <q>
    //         <i>The software that makes you the database engineer</i>
    //       </q>
    //     </p>
    //   </div>
    // </Wrapper>
  );
};
