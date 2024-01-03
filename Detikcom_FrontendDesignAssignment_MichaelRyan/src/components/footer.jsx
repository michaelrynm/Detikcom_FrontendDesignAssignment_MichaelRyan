import React from "react";
import Logo from "../assets/footerLogo.svg";
import facebook from "../assets/footerLogo/facebook.svg";
import instagram from "../assets/footerLogo/instagram.svg";
import linkedin from "../assets/footerLogo/linkedin.svg";
import youtube from "../assets/footerLogo/youtube.svg";
import twitter from "../assets/footerLogo/twitter.svg";
import Line from "../assets/line.svg"

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div>
          <img src={Logo} alt="" className="footer-image" />
        </div>

        <div className="d-flex align-items-center gap-3 ">
          <div>
            <p className="text-white mt-5 fs-5 ">
              Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
              Detikhealth secara gratis untuk masyarakat Indonesia. Ajak
              keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023
              lalu menangkan hadiah utama serta doorprize dengan total puluhan
              juta rupiah
            </p>
          </div>

          <div>
            <div>
              <p className="text-white text-center ">Connetct With Us</p>
            </div>
            <div className="d-flex gap-3 ">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>

        <div>
            <img src={Line} alt="" className="w-100 " />
        </div>

        <div className="mt-2 text-white ">
            <p>Copyright &copy; 2023 detikcom. All right reserved</p>
        </div>

      </div>
    </div>
  );
}
