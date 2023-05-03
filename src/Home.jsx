import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";
import Meet from "./components/MeetOurSpecialist/Meet";
import Consultation from "./components/Section-2/Consultation";
import Makeus from "./components/Section-3/Makeus";
import Appointment from "./components/Appointment/Appointment";
import Gallery from "./components/Gallery/Gallery";

const Home = () => {
  const Gradient = ({ children }) => {
    return (
      <div
        style={{
          background: "linear-gradient(180deg,#DAF2FF, #FFFFFF)",
        }}
      >
        {children}
      </div>
    );
  };
  return (
    <>
      <Gradient>
        <HeroSection />
        <Services />
      </Gradient>
      <Aboutus />
      <Consultation/>
      <Makeus/>
      <Meet/>
      <Gallery/>
      <Appointment />
    </>
  );
};
export default Home;
