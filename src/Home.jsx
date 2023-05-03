import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";
import Meet from "./components/MeetOurSpecialist/Meet";
import Consultation from "./components/sectiontwo/Consultation";
import Makeus from "./components/sectionthree/Makeus";
import Appointment from "./components/appointment/Appointment";
import FooterSection from "./components/footer/Footer";

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
      <Consultation />
      <Makeus />
      <Meet />
      <Appointment />
      <FooterSection />
    </>
  );
};
export default Home;
