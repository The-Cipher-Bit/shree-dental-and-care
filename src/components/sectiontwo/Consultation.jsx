import React from "react";
import "./Consultation.css";
import image from "../../assets/images/hero-teeth.png";
import imagea from "../../assets/images/image 48.png";
import imageb from "../../assets/images/image 49.png";
import imagec from "../../assets/images/image 50.png";

import Doctor from "../../assets/images/doctor.png";

const Detail = [
  {
    id: 1,
    className: "details-section-1",
    details: "Leaser Technology",
    image: imagea,
    detaila:'Revolutionizing dental care with laser technology.'
  },
  {
    id: 2,
    className: "details-section-2",
    details: "Painless Technology",
    image: imageb,
  },
  {
    id: 3,
    className: "details-section-3",
    details: "3D Dental Scanner",
    image: imagec,
  },
];
function Consultation() {
  return (
    <>
      <div className="container-consultation">
        <div className="image-background">
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="container-bookappointment">
          <p style={{ padding: "12px" }}>Dr.Jhon Doe</p>
          <div className="btn">
            <a href="#">Book Appointment</a>
          </div>
        </div>
        <div className="container-consultation-right">
          <h2 className="textcolor_secondary" style={{fontSize:'2.8rem'}}>Find Your Right Doctor</h2>
          <h1 className="textcolor_primary"style={{fontSize:'2.8rem'}}>For Best Consultation</h1>
          <div className="detail-section">
            {Detail.map((details) => (
              <div key={details.id} className={details.className}>
                <img src={details.image} alt="details" />
                <p>{details.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultation;
