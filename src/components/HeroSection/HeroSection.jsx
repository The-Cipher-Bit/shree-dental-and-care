import { useState,useEffect} from "react";
import "./Herosection.css";
import logo from "../../assets/images/templogo.png";
import Heroslider from "./HeroSlider";
import Teeth from "../../assets/images/hero-teeth.png";
const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }),[]});
  // const handleScroll = () => {  
  //   if (window.scrollY > 0) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // window.addEventListener("scroll", handleScroll);

  const linkColor = scrolled ? { color:'black' } : {};
  return (
    <header>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <img src={logo} alt="Shree Dental Logo" />
        </div>
        <ul className="nav-list">
          <li>
            <a style={linkColor} href="#">
              Home
            </a>
          </li>
          <li>
            <a style={linkColor} href="#about">
              About Us
            </a>
          </li>
          <li>
            <a style={linkColor} href="#consult">
              Consultation
            </a>
          </li>
          <li>
            <a style={linkColor} href="#contact">
              Contact Us
            </a>
          </li>
          <li>
            <a style={linkColor} href="#gallery">
              Gallery
            </a>
          </li>
        </ul>
        <div className="booknow-btn">
          <a href="#booknow">Book Now</a>
        </div>
      </nav>
      <Heroslider />
      <div className="container-teeth">
        <div className="container-teeth-image">
          <img src={Teeth} alt="teeth" />
        </div>
        <div className="container-teeth-content">
          <p>
            We can restore <span className="teeth-text-color">your dental health issue</span>
          </p>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
