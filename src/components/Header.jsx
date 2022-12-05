import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import UserLists from "./UserLists";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="wrap-logo">
          <img className="logo" src={logo} alt="checklist" />
          <span>
            <strong>Check</strong>List
          </span>
        </Link>
        <div className="wrap-user">
          <UserLists />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
