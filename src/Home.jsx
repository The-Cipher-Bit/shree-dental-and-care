import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";
import Meet from "./components/MeetOurSpecialist/Meet";
import Consultation from "./components/Section-2/Consultation";
import Makeus from "./components/Section-3/Makeus";
import Appointment from "./components/Appointment/Appointment";

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
      <Consultation></Consultation>
      <Makeus></Makeus>
      <Meet></Meet>
      <Appointment />
    </>
  );
};
export default Home;
