import React from "react";
import "./style.css";
import background from "../../assets/jolt-landing-page-bg.png";
// import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <div className="container">
      <div className="container-navbar">
        <div className="container-left">
          <a href="#" className="jolt">
            Jolt
          </a>
          <a href="#" className="components">
            Components
          </a>
          <a href="#" className="collections">
            collections
          </a>
          <a href="#" className="store">
            Store
          </a>
          <a href="#" className="blog">
            Blog
          </a>
          <a href="#" className="find">
            Find Store
          </a>
        </div>
        <div className="menu-btn">
          <div className="navigation">
            <div className="container-right">
              <a href="#" className="search">
                Search
              </a>
              <a href="#" className="car">
                Car
              </a>
              <a href="#" className="login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="background">
        <img src={background} />
      </section>
    </div>
  );
};

export default Navbar;
