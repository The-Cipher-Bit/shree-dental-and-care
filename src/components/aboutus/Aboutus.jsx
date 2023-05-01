import "./Aboutus.css";
import Doctor from "../../assets/images/doctor-1.png";
const Aboutus = () => {
  return (
    <>
      <div className="container-aboutus">
        <div className="container-left">
          <h3>About <p className="para">Shree Dental</p></h3>
          <p>
            We are a dedicated dental practice committed to providing
            exceptional care in a friendly and comfortable environment. Our
            experienced team offers a full range of services tailored to your
            unique needs, using the latest technology and techniques. We look
            forward to serving you and your family.
          </p>
        </div>
        <div className="container-right"></div>
        <img src={Doctor} alt="Doctor1" />
      </div>
    </>
  );
};
export default Aboutus;
