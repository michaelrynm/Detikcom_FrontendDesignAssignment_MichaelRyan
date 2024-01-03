import Navbar from "./components/navbar";
import Acara from "./components/acara";
import Hero from "./components/hero";
import Sponsor from "./components/sponsor";
import Galeri from "./components/galeri";
import Artikel from "./components/artikel";
import Footer from "./components/footer";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const tentangAcaraRef = useRef(null);
  const galeriRef = useRef(null);
  const beritaRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "tentang-acara":
        tentangAcaraRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "galeri":
        galeriRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "berita":
        beritaRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="background">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
      </div>
      <section ref={tentangAcaraRef} id="tentang-acara">
        <Acara />
      </section>
      <Sponsor />
      <section ref={galeriRef} id="galeri">
        <Galeri />
      </section>
      <section ref={beritaRef} id="berita">
        <Artikel />
      </section>
      <Footer />
    </div>
  );
}

export default App;
