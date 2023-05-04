import { useState, useEffect } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import "./scrolltotop.css";

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400
        ? setShowScrollToTop(true)
        : setShowScrollToTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top_arrow ${
        showScrollToTop ? "animation_enter" : "animation_leave"
      }`}
      onClick={handleScrollToTop}
    >
      {showScrollToTop && <HiArrowCircleUp size={50} />}
    </div>
  );
};

export default ScrollToTop;
