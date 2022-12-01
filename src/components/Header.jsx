import React from "react";
import logo from "../assets/logo.png";
import UserLists from "./UserLists";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrap-logo">
          <img className="logo" src={logo} alt="checklist" />
          <span>
            <strong>Check</strong>List
          </span>
        </div>
        <User />
      </div>
      <UserLists />
    </header>
  );
};

export default Header;
