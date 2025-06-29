import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/*" Component={Home} />
    </Routes>
  );
};

export default App;
