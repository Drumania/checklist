import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import myLists from "./pages/myLists";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="myLists" element={<myLists />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
