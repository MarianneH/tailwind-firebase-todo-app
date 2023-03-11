import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Todos from "./pages/todos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Todos />} path="/todos" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
