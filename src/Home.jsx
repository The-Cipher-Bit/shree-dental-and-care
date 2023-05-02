import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Meet from "./components/MeetOurSpecialist/Meet";
import Consultation from "./components/Section-2/Consultation";
import Makeus from "./components/Section-3/Makeus";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Consultation></Consultation>
      <Makeus></Makeus>
      <Meet></Meet>
   
    </>
  );
}
export default Home