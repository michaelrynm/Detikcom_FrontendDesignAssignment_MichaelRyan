import Navbar from "./components/navbar";
import Acara from "./components/acara";
import Hero from "./components/hero";
import Sponsor from "./components/sponsor";
import Galeri from "./components/galeri";
import Artikel from "./components/artikel";
function App() {
  return (
    <div>
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <Acara />
      <Sponsor />
      <Galeri />
      <Artikel />
    </div>
  );
}

export default App;
