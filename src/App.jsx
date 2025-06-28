import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/*" Component={Home} />
      </Routes>
    </div>
  );
};

export default App;
