import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/herosection/HeroSection";
import Services from "./components/ourservices/Services";
import Meet from "./components/meetourspecialist/Meet";
import Consultation from "./components/sectiontwo/Consultation";
import Makeus from "./components/sectionthree/Makeus";
import Appointment from "./components/appointment/Appointment";

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
    </>
  );
};
export default Home;
