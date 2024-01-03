import React from "react";
import image1 from "../assets/galeri/image1.svg";
import image2 from "../assets/galeri/image2.svg";
import image3 from "../assets/galeri/image3.svg";
import image4 from "../assets/galeri/image4.svg";
export default function Galeri() {
  return (
    <div style={{marginTop: 200}}>
        <div className="d-flex justify-content-center ">
            <p className="fw-bolder fs-1">GALERI SUDIRMAN RUN 2022</p>
        </div>
      <div className="d-flex justify-content-center">
        <div
        style={{width: "65rem"}}
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="image1" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="image" />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="image" />
            </div>
            <div className="carousel-item">
              <img src={image4} className="d-block w-100" alt="image" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 gap-3 ">
        <img src={image1} alt="" style={{width:250, height: 145}} />
        <img src={image2} alt="" style={{width:250, height: 145}} />
        <img src={image3} alt="" style={{width:250, height: 145}} />
        <img src={image4} alt="" style={{width:250, height: 145}} />
      </div>
    </div>
  );
}
