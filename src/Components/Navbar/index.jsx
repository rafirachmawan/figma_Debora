import React from "react";
import "./style.css";
import background from "../../assets/jolt-landing-page-bg.png";

const Navbar = () => {
  return (
    <div>
      <img src={background} alt="" />
      <h1>Judul website</h1>
      <h2>Subjudul atau Deskripsi</h2>
      <nav>
        <a href="#">Beranda</a>
        <a href="#">Tentang</a>
        <a href="#">Kontak</a>
      </nav>
    </div>
  );
};

export default Navbar;
