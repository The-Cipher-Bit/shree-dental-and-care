import { motion } from "framer-motion";
import { useState } from "react";
import "./Consultation.css";
import { RiUserFollowFill, RiTimeFill } from "react-icons/ri";
import imagea from "../../assets/images/image 48.png";
import imageb from "../../assets/images/image 49.png";
import imagec from "../../assets/images/image 50.png";
import Doctor from "../../assets/images/doctor.png";
import Button from "../ButtonComponent/Button";

const details = [
  {
    id: 1,
    doctorName: "Dr.Jhon Doe",
    speciality: "Dental Surgeon",
    field: "Leaser Technology",
    image: imagea,
    doctorImage: Doctor,
    time: "10:00 AM - 3:00 PM",
    detail: "Revolutionizing dental care with laser technology.",
  },
  {
    id: 2,
    doctorName: "Dr. Jiten karki",
    speciality: "Dental Surgeon",
    field: "Painless Technology",
    image: imageb,
    doctorImage: Doctor,
    time: "10:00 AM - 6:00 PM",
    detail: "Revolutionizing dental care with laser technology.",
  },
  {
    id: 3,
    doctorName: "Dr.Chandra",
    speciality: "Dental Surgeon",
    field: "3D Dental Scanner",
    image: imagec,
    doctorImage: Doctor,
    time: "10:00 AM - 3:00 PM",
    detail: "Revolutionizing dental care with laser technology.",
  },
];
function Consultation() {
  const [activeDoctor, setActiveDoctor] = useState(details[0]);
  const sectionVariants = {
    initial: {
      x:  '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
   
  };
  return (
    <>
        <motion.div
          key={activeDoctor.id}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          id="consult"
        >
          <div className="container-consultation">
            <div className="container-consultation-left">
              <div className="consultation-image-container">
                <img src={Doctor} alt="Doctor" />
              </div>
              <div className="container-bookappointment">
                <div className="container-bookappointment_doctor_info">
                  <div className="container-bookappointment_doctor_info_left">
                    <RiUserFollowFill size={25} color="white" />
                  </div>
                  <div className="container-bookappointment_doctor_info_right">
                    <h2 className="title_font">{activeDoctor.doctorName}</h2>
                    <p>{activeDoctor.speciality}</p>
                  </div>
                </div>
                <div className="container-bookappointment_doctor_availability">
                  <div className="container-bookappointment_doctor_time">
                    <RiTimeFill size={25} color="black" />
                  </div>
                  <div className="container-bookappointment_doctor_time">
                    <p>
                      Time :{" "}
                      <span style={{ color: "red" }}>{activeDoctor.time}</span>
                    </p>
                  </div>
                </div>
                <Button text="Book Appointment" padLeft="20px" />
              </div>
            </div>

            <div className="container-consultation-right">
              <h2
                className="textcolor_secondary title_font"
                style={{ fontSize: "2.8rem" }}
              >
                Find Your Right Doctor
              </h2>
              <h1
                className="textcolor_primary title_font"
                style={{ fontSize: "2.8rem", marginBottom: "1rem" }}
              >
                For Best Consultation
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                optio ullam ab eveniet iusto unde vero error ea numquam,
                eligendi natus.
              </p>
              <div className="doctors_field_container">
                {details.map((detail) => (
                  <div
                    key={detail.id}
                    onClick={() => setActiveDoctor(detail)}
                    className={`doctors_field_card ${
                      activeDoctor.id === detail.id
                        ? "doctors_field_card_active"
                        : ""
                    }`}
                  >
                    <div className="detail-section-field-image">
                      <img src={detail.image} alt="details" />
                    </div>
                    <div className="detail-section-field-data">
                      <h2>{detail.field}</h2>
                      <p>{detail.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
    </>
  );
}

export default Consultation;
