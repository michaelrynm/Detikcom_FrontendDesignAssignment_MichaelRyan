import React from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="sticky-container"> {/* Add a container for sticky behavior */}
      <div
        style={{ position: "sticky", top: "0", zIndex: 999 }}
        className="container bg-white shadow-lg bg-opacity-50 rounded-pill d-flex justify-content-between p-4 align-items-center"
      > {/* Remove mt-5 to avoid initial offset */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="d-flex gap-5 align-items-center">
          <a href="" className="text-decoration-none text-black fw-medium">
            Home
          </a>
          <a href="" className="text-decoration-none text-black fw-medium">
            Tentang Acara
          </a>
          <a href="" className="text-decoration-none text-black fw-medium">
            Galeri
          </a>
          <a href="" className="text-decoration-none text-black fw-medium">
            Berita
          </a>
          <button className="btn reg-button text-white fw-medium rounded-5">
            Registrasi
          </button>
        </div>
      </div>
    </div>
  );
}
