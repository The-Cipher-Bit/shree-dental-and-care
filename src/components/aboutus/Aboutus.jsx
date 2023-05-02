import "./aboutus.css";
import Doctor from "../../assets/images/doctor-1.png";
const Aboutus = () => {
  return (
    <>
      <div className="container-aboutus" id="about">
        <div className="container-aboutus-left">
          <h2 className="textcolor_secondary">About <span className="textcolor_primary">Shree Dental</span></h2>
          <p>
            We are a dedicated dental practice committed to providing
            exceptional care in a friendly and comfortable environment. Our
            experienced team offers a full range of services tailored to your
            unique needs, using the latest technology and techniques. We look
            forward to serving you and your family.
          </p>
        </div>
        <div className="container-aboutus-right">
          <img src={Doctor} alt="Doctor1" />
        </div>
      </div>
    </>
  );
};
export default Aboutus;
