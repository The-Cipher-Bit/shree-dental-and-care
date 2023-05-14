import { useState, useEffect } from "react";
import "./Herosection.css";
import logo from "../../assets/images/templogo.png";
import Heroslider from "./HeroSlider";
import Teeth from "../../assets/images/hero-teeth.png";
import Button from "../ButtonComponent/Button";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { AnimatePresence , motion } from "framer-motion";

const NavLinks = ({ handleLink = ''}) =>{
  return (
    <ul className="nav-list">
      <li>
        <a href="#" onClick={handleLink}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={handleLink}>
          About Us
        </a>
      </li>
      <li>
        <a href="#consult" onClick={handleLink}>
          Consultation
        </a>
      </li>
      <li>
        <a href="#contact" onClick={handleLink}>
          Contact Us
        </a>
      </li>
      <li>
        <a href="#gallery" onClick={handleLink}>
          Gallery
        </a>
      </li>
    </ul>
  );
}

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  //framer motion variants
  const navVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.3,
      },
    },
    leave: {
      opacity: 0,
      transform: "translateY(-100%)",
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 100,
        delay: 0.3,
      },
    },
  };


  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    }),
      [];
  });
  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // window.addEventListener("scroll", handleScroll);

  return (
    <>
      {toggleMenu && (
        <div className="navlinks_container">
          <NavLinks />
        </div>
      )}
      <header>
        <nav className={`${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <img src={logo} alt="Shree Dental Logo" />
          </div>
          <div className="navlinks_container">
            <NavLinks />
          </div>
          <div className="clickable_buttons">
            <Button text="Plan Your Visit" url="#appointment" padLeft="25px" />
            {toggleMenu ? (
              <RiCloseFill onClick={handleToggle} className="menu-close-icon" />
            ) : (
              <RiMenuFill onClick={handleToggle} className="menu-open-icon" />
            )}
          </div>
        </nav>
        <Heroslider />
        <div className="container-teeth">
          <div className="container-teeth-image">
            <img src={Teeth} alt="teeth" />
          </div>
          <div className="container-teeth-content">
            <p>
              We can restore{" "}
              <span className="teeth-text-color">your dental health issue</span>
            </p>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            key={1}
            initial="hidden"
            animate="visible"
            exit="leave"
            variants={navVariants}
            className="navlinks_container_mobile_tabs"
          >
            <NavLinks handleLink = {handleToggle} />
            <RiCloseFill onClick={handleToggle} className="menu-close-icon" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default HeroSection;
