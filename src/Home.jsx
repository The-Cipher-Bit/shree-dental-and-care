import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";
import Meet from "./components/MeetOurSpecialist/Meet";
import Appointment from "./components/appointment/Appointment";
import Gallery from "./components/Gallery/Gallery";
import Consultation from "./components/sectiontwo/Consultation";
import Makeus from "./components/sectionthree/Makeus";
import FooterSection from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
      <ScrollToTop />
      <FooterSection />
    </>
  );
};
export default Home;
