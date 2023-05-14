import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";
import Meet from "./components/MeetOurSpecialist/Meet";
import Appointment from "./components/appointment/Appointment";
import Gallery from "./components/Gallery/Gallery";
import Consultation from "./components/sectiontwo/Consultation";
import Makeus from "./components/sectionthree/Makeus";
import Review from "./components/Reviews/Review";
import FooterSection from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Map from "./components/Map/Map";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const InitialAnimation = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "translateX(0)" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s ease",
        }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <>
      <Gradient>
        <HeroSection />
        <Services />
      </Gradient>
      <InitialAnimation>
        <Aboutus />
      </InitialAnimation>
      <Consultation />
      <InitialAnimation>
        <Makeus />
      </InitialAnimation>
      <Meet />
      <Gallery />
      <InitialAnimation>
        <Appointment />
      </InitialAnimation>
      <Review />
      <Map />
      <ScrollToTop />
      <FooterSection />
    </>
      
  );
};
export default Home;
