import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { Auth } from "./firebase-config";
import Login from "./pages/Login";
import Home from "./components/Home";

const Root = () => {
  const { pathname } = useLocation();
  pathname === "/login"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const [isAuth, setIsAuth] = useState(false);
  const SignUserOut = () => {
    localStorage.clear();
    signOut(Auth);
    window.location.href = "login";
  };
  return (
    <div className="page_container">
      <div className="content_wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};

export default App;
