import React from "react";
import CardImage from "../assets/cardimage.svg"
import Map from "../assets/map 1.svg";

export default function Acara() {
  return (
    <div>
      <div
        className="container-fluid d-flex justify-content-center gap-5"
        style={{ marginTop: "100px" }}
      >
        <div>
          <div
            className="card rounded-5 p-3 text-white "
            style={{ width: "500px" }}
          >
            <img src={Map} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bolder  fs-1 fst-italic ">
                10K FUN RUN
              </h5>
              <p className="card-text">
                Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari
                dimulai dari Bundaran HI hingga Patung Pemuda Membangun di
                Senayan lalu kembali lagi ke Bundaran HI!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column gap-3">
            <div
              className="card text-white rounded-5"
              style={{
                width: "36rem",
                height: "150px",
                fontFamily: "sans-serif",
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bolder fs-1 fst-italic ">
                  GRATIS DAN BERHADIAH
                </h5>
                <p className="card-text">
                  Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah
                  total puluhan juta rupiah doorprize menarik!
                </p>
              </div>
            </div>

            <div
              className="card text-white rounded-5"
              style={{
                width: "36rem",
                height: "150px",
                fontFamily: "sans-serif",
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bolder fs-1 fst-italic ">
                  50+ TENANT BAZAR
                </h5>
                <p className="card-text">
                  Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman
                  Run 2023 mulai dari F&B hingga fashion
                </p>
              </div>
            </div>

            <div
              className="card text-white rounded-5"
              style={{
                width: "36rem",
                height: "200px",
                fontFamily: "sans-serif",
              }}
            >
              <div className="d-flex justify-content-center align-items-center ps-2 ">
                <div>
                  <img
                  className="perform-image"
                    src={CardImage}
                    style={{ width: "150px", height: "150px"}}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bolder fs-1 fst-italic ">
                    SPECIAL PEFORMANCE
                  </h5>
                  <p className="card-text">
                    Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta
                    hiburan lainnya!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <button className="btn btn-warning btn-lg  text-white rounded-pill mt-5 ">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}
