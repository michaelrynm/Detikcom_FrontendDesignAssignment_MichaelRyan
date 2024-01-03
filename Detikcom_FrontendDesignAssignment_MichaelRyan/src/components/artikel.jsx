import React from "react";
import image1 from "../assets/artikel/artikel1.svg";
import image2 from "../assets/artikel/artikel2.svg";
import image3 from "../assets/artikel/artikel3.svg";
import image4 from "../assets/artikel/artikel4.svg";
import image5 from "../assets/artikel/artikel5.svg";
import image6 from "../assets/artikel/artikel6.svg";
import { useState } from "react";

export default function Artikel() {
  const [activeTab, setActiveTab] = useState("artikel");

  const handleTabClick = (tab, e) => {
    e.preventDefault()
    setActiveTab(tab);
  };

  return (
    <div className="bg-berita">
      <div style={{ marginTop: 356 }}>
        <div className="fw-bold fs-2 text-center">
          <p>ARTIKEL TERKAIT</p>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="d-flex justify-content-center gap-5 tabcon rounded-5 p-2">
            <a
              href=""
              className={`text-decoration-none text-white fw-bold ${activeTab === "artikel" && "active bg-opacity-50 bg-white rounded-5 w-25 text-center "}`}
              onClick={(e) => handleTabClick("artikel", e)}
            >
              Artikel
            </a>
            <a
              href=""
              className={`text-decoration-none text-white fw-bold ${activeTab === "foto" && "active bg-opacity-50 bg-white rounded-5 w-25 text-center"}`}
              onClick={(e) => handleTabClick("foto", e)}
            >
              Foto
            </a>
            <a href="" className={`text-decoration-none text-white fw-bold ${activeTab === "video" && "active bg-opacity-50 bg-white rounded-5 w-25 text-center"}`}
            onClick={(e) => handleTabClick("video", e)}>
              Video
            </a>
          </div>
        </div>

        {/* Card */}
        <div className="d-flex justify-content-center gap-5 mt-5 ">
          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image1} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme
                Beberkan Prosesnya
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Sabtu, 25 Nov 2023 20:00 WIB
              </p>
            </div>
          </div>

          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image2} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See
                Nature
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Selasa, 28 Nov 2023 07:42 WIB
              </p>
            </div>
          </div>

          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image3} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Minggu, 26 Nov 2023 13:04 WIB
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-5 mt-5 ">
          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image4} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton
                Maliq & D'essentials
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Sabtu, 18 Nov 2023 17:39 WIB
              </p>
            </div>
          </div>

          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image5} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                CT Arsa Charity Fun Run 2023 Bertabur Emas
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Kamis, 16 Nov 2023 16:34 WIB
              </p>
            </div>
          </div>

          <div className="card border-0 " style={{ width: 376 }}>
            <img src={image6} className="card-img-top rounded-5 " alt="..." />
            <div className="card-body p-0 mt-2 ">
              <h5 className="card-title fs-6 fw-bold ">
                BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta
              </h5>
              <p className="card-text fw-lighter fs-6 ">
                Minggu, 12 Nov 2023 11:55 WIB
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <a
            href="https://www.detik.com/search/searchall?query=fun+run&siteid=2"
            className="btn btn-warning rounded-pill text-white fw-bold p-2 mt-5  "
          >
            LIHAT LEBIH BANYAK
          </a>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
