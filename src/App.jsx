import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Todos from "./pages/todos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Todos />} path="/todos" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
