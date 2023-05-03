import { useState, useEffect } from "react";
import "./Heroslider.css";
import HeroImage1 from "../../assets/images/heroimage-1.png";
import HeroImage2 from "../../assets/images/heroimage-2.jpg";

const HeroSlider = () => {
  const images = [
    HeroImage1,
    HeroImage2,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="hero-slider">
      <div className="hero-slider__overlay"></div>
      <div
        className="hero-slider__slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div className="hero-slider__slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="hero-slider__dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`hero-slider__dot ${
              index === currentIndex ? "hero-slider__dot--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div className="hero-slider__content">
        <h1 className="title_font hero-slider__title">Consult Your</h1>
        <h1 className="title_font hero-slider__title title__middle textcolor_primary">Dental Health</h1>
        <h1 className="title_font hero-slider__title">Issue</h1>
        <p className="hero-slider__description">
          Smile with confidence
        </p>
        <p className="hero-slider__description">
          let us take care of your dental needs
        </p>
        <button className="hero-slider__btn">Schedule a call</button>
      </div>
    </div>
  );
};

export default HeroSlider;
