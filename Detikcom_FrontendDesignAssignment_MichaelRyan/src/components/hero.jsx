import React from "react";
import LogoEvent from "../assets/logo-event 2.svg"

export default function Hero() {
  return (
    <div>
      <div
        className="container d-flex flex-column align-items-start "
        style={{ marginTop: "150px" }}
      >
        <img src={LogoEvent} alt="" />
        <button className="btn btn-warning text-white rounded-pill mt-5 ">
          Tentang Acara
        </button>
      </div>
    </div>
  );
}
