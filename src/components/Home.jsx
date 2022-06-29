import React from "react";

import NavBar from "./NavBar";
import Title from "./Title";
import Menu from "./Menu";
import Footer from "./Footer";
import "../styles/home.css";

function Home() {
  return (
    <div className="scrollable">
      <div className="bg">
        <NavBar />
        <Title />
      </div>

      <div className="menu">
        <Menu />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
