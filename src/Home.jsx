import { motion, useInView } from "framer-motion";
import { useRef, lazy, Suspense} from "react";

const Aboutus = lazy(() => import("./components/aboutus/Aboutus"));
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const Services = lazy(() => import("./components/OurServices/Services"));
const Meet = lazy(() => import("./components/MeetOurSpecialist/Meet"));
const Appointment = lazy(() => import("./components/appointment/Appointment"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Consultation = lazy(() => import("./components/sectiontwo/Consultation"));
const Makeus = lazy(() => import("./components/sectionthree/Makeus"));
const Review = lazy(() => import("./components/Reviews/Review"));
const FooterSection = lazy(() => import("./components/footer/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"));
const Map = lazy(() => import("./components/Map/Map"));
import PreLoader from "./components/PreLoader/PreLoader";


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

const Home = () => {
  return (
    <>
         <Gradient>
        <Suspense fallback={<PreLoader text="loading..." />}>
          <HeroSection />
          <Services />
        </Suspense>
      </Gradient>
      <InitialAnimation>
        <Suspense fallback={<PreLoader text="loading..." />}>
          <Aboutus />
        </Suspense>
      </InitialAnimation>
      <Suspense fallback={<PreLoader text="loading..." />}>
        <Consultation />
      </Suspense>
      <InitialAnimation>
        <Suspense fallback={<PreLoader text="loading..." />}>
          <Makeus />
        </Suspense>
      </InitialAnimation>
      <Suspense fallback={<PreLoader text="loading..." />}>
        <Meet />
      </Suspense>
      <Suspense fallback={<PreLoader text="loading..." />}>
        <Gallery />
      </Suspense>
      <InitialAnimation>
        <Suspense fallback={<PreLoader text="loading..." />}>
          <Appointment />
        </Suspense>
      </InitialAnimation>
      <Suspense fallback={<PreLoader text="loading..." />}>
        <Review />
        <Map />
      </Suspense>
      <ScrollToTop />
      <FooterSection />
    </>
  );
};
export default Home;
