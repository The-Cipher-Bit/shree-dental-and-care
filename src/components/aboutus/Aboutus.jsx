import "./Aboutus.css";
import Doctor from "../../assets/images/doctor.png";
import Button from "../ButtonComponent/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Aboutus = () => {
  return (
    <>
      <div className="container-aboutus" id="about">
        <div className="container-aboutus-left">
          <h2 className="title_font textcolor_secondary">About <span className="title_font textcolor_primary">Shree Dental</span></h2>
          <p>
            We are a dedicated dental practice committed to providing
            exceptional care in a friendly and comfortable environment. Our
            experienced team offers a full range of services tailored to your
            unique needs, using the latest technology and techniques. We look
            forward to serving you and your family.
          </p>
          <Button text="Learn More" />
        </div>
        <div className="container-aboutus-right">
          <LazyLoadImage src={Doctor} alt="Doctor1" />
        </div>
      </div>
    </>
  );
};
export default Aboutus;
