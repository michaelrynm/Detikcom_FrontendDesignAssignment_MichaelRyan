import React from "react";
import image1 from "../assets/carousel/Frame 12320.svg";
import image2 from "../assets/carousel/Frame 12321.svg";
import image3 from "../assets/carousel/Frame 12322.svg";
import image4 from "../assets/carousel/Frame 12323.svg";
import image5 from "../assets/carousel/Frame 12324.svg";
import image6 from "../assets/carousel/Frame 12325.svg";
import image7 from "../assets/carousel/Frame 12326.svg";
import image8 from "../assets/carousel/Frame 12327.svg";

export default function Sponsor() {
  return (
    <div className="mt-5 sponsor pt-5 pb-5 w-100 ">
      <div className="d-flex justify-content-center ">
        <p className="fw-bold fs-3 text-white">DIDUKUNG OLEH</p>
      </div>
      <div className="container-fluid d-flex flex-row carousel-container overflow-hidden ">
        <div className="container ">
          <img src={image1} alt="" />
        </div>
        <div className="container">
          <img src={image2} alt="" />
        </div>
        <div className="container">
          <img src={image3} alt="" />
        </div>
        <div className="container">
          <img src={image4} alt="" />
        </div>
        <div className="container">
          <img src={image5} alt="" />
        </div>
        <div className="container">
          <img src={image6} alt="" />
        </div>
        <div className="container">
          <img src={image7} alt="" />
        </div>
        <div className="container">
          <img src={image8} alt="" />
        </div>
      </div>
    </div>
  );
}
