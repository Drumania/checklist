import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Lists from "./pages/Lists";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="lists" element={<Lists />} />
      </Route>
    </Routes>
  );
}

export default App;
