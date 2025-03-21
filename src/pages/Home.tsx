import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar";
import PopularMenu from "../components/PopularMenu";
import QuoteSection from "../components/QuoteSection";
import ReviewSection from "../components/ReviewSection";

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <header className="bg-base w-full xl:h-screen h-auto">
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <QuoteSection />
        <AboutSection />
        <PopularMenu />
        <BenefitsSection />
        <ReviewSection />
        <MapSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
