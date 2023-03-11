import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Todos />} path="/todos" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
