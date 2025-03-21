import AllMenu from "../components/AllMenu";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";

function Menu() {
  return (
    <div className="w-full overflow-hidden">
      <header className="bg-base w-full">
        <Navbar />
      </header>
      <main>
        <AllMenu />
        <MapSection />
        <Footer />
      </main>
    </div>
  );
}

export default Menu;
