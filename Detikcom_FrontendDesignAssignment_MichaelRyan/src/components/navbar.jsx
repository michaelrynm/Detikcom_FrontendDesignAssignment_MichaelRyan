import React from "react";
import Logo from "../assets/logo.svg";
import { useRef } from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <div className="navbar-cont">
      <div
        className="container bg-white shadow-lg bg-opacity-50 rounded-pill d-flex justify-content-between p-4 align-items-center mt-5 "
      >
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="d-flex gap-5 align-items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-black border-0 bg-transparent fw-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("tentang-acara")}
            className="text-black border-0 bg-transparent fw-medium"
          >
            Tentang Acara
          </button>
          <button
            onClick={() => scrollToSection("galeri")}
            className="text-black border-0 bg-transparent fw-medium"
          >
            Galeri
          </button>
          <button
            onClick={() => scrollToSection("berita")}
            className="text-black border-0 bg-transparent fw-medium"
          >
            Berita
          </button>
          <a
            href="https://event.detik.com/"
            className="btn reg-button text-white fw-medium rounded-5"
          >
            Registrasi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
