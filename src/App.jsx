import React from "react";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home2" Component={Home2} />
        <Route path="/*" Component={Home} />
      </Routes>
    </div>
  );
};

export default App;
