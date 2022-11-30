import React from "react";
import logo from "./assets/logo.png";
import User from "./components/User";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="wrap-logo">
            <img className="logo" src={logo} alt="checklist" />
            <span>
              <strong>Check</strong>List
            </span>
          </div>
          <User />
        </header>
      </div>

      <List />
    </>
  );
}

export default App;
