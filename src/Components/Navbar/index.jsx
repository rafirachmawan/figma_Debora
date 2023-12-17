import React from "react";
import "./style.css";
import background from "../../assets/jolt-landing-page-bg.png";
// import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <div className="containerStyle">
      <img className="imageStyle" src={background} alt="" />
      <div className="contentStyle">
        <a href="">Jolt</a>
        <a href="">Categories</a>
        <a href="">Collections</a>
        <a href="">Store</a>
        <a href="">Blog</a>
        <a href="">Find Store</a>

        <a href="">Search</a>
        <a href="">Car</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
