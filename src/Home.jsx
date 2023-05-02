import Appointment from "./components/appointment/Appointment";
import Aboutus from "./components/aboutus/Aboutus";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/OurServices/Services";

const Home = () => {
  const Gradient = ({children}) =>{
    return (
      <div
        style={{
          background: "linear-gradient(180deg,#DAF2FF, #FFFFFF)",
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <>
    <Gradient>
      <HeroSection />
      <Services />
    </Gradient>  
      <Aboutus />    
      <Appointment />
    </>
  );
}
export default Home