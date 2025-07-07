import ServicesSection from "./components/ServicesSection";
import Doctors from "./components/Doctors";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="pb-24">
      <ServicesSection />
      <Doctors />
      <Services />
      <Reviews />
    </div>
  );
}
