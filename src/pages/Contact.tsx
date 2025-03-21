import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="w-full overflow-hidden">
      <header className="bg-base w-full">
        <Navbar />
      </header>
      <main>
        <ContactSection />
        <MapSection />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
