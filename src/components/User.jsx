import React from "react";
import Avatar from "../assets/useravatar.png";
import UserLists from "./UserLists";
import Settings from "./Settings";

export default function User() {
  return (
    <>
      <div className="user">
        <a href="#!" className="user-avatar" title="edit">
          <img src={Avatar} alt="Maria Fernanda" />
        </a>
        <a href="#!" className="user-name">
          Maria Fernanda
        </a>
        <a href="#!" className="user-menu">
          &#8942;
        </a>
      </div>
    </>
  );
}
