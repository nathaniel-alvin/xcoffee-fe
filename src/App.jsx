import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { Auth } from "./firebase-config";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Menu from "./components/Menu";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const SignUserOut = () => {
    localStorage.clear();
    signOut(Auth);
    window.location.href = "login";
  };
  return (
    <div>
      <Router>
        <div className="bg">
          <NavBar />
          <Title />
        </div>

        <div className="menu">
          <Menu />
        </div>
      </Router>
    </div>
  );
};

export default App;