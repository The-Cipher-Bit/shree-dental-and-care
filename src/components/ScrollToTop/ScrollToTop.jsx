import { useState, useEffect } from "react";
import {motion, AnimatePresence} from "framer-motion";
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
     return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <motion.div
          className="scroll-to-top_arrow"
          initial={{opacity:0,transform: 'translateY(0)'}}
          animate={{opacity:1, transform: 'translateY(20px)'}}
          exit={{opacity:0,transform:'translateY(-20px)'}}
          onClick={handleScrollToTop}
        >
          <HiArrowCircleUp size={50} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
