import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Todos from "./pages/todos";
import "./App.css";
import Logout from "./component/Logout";
import PrivateRoutes from "./routes/ProtectedRoutes";
import DarkModeToggle from "./component/DarkModeToggle";
import Home from "./pages/Home";
import Logo from "./component/Logo";

function App() {
  return (
    <div className="App">
      <Router>
        <Logo />
        <DarkModeToggle />
        <Logout />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Todos />} path="/todos" />
          </Route>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
