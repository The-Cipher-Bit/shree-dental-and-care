import { useState } from "react";
import "./herosection.css";
import logo from "../../assets/images/templogo.png";
import Heroslider from "./HeroSlider";
import Teeth from "../../assets/images/hero-teeth.png";
const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <header>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <img src={logo} alt="Shree Dental Logo" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#consult">Consultation</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
        <div className="booknow-btn">
          <a href="#booknow">Book Now</a>
        </div>
      </nav>
      <Heroslider />
      <div className="container-teeth">
        <div className="container-image-bg"></div>
        <div className="container-image">
          <img src={Teeth} alt="teeth" />
        </div>
        <div className="container-content">
          <p>We can restore </p><p className="text-color">your dental health issue</p>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
