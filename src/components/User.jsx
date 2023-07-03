import React from "react";
import Avatar from "../assets/useravatar.png";
import UserLists from "./UserLists";
import Settings from "./Settings";

export default function User() {
  return (
    <>
      <div className="user">
        <a href="#!" className="user-avatar" title="edit">
          <img src={Avatar} alt="Martin" />
        </a>
        <a href="#!" className="user-name">
          Martin
        </a>
        <a href="#!" className="user-menu">
          &#8942;
        </a>
      </div>
    </>
  );
}
