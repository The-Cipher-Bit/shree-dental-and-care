import "./Map.css";
import clinic from "../../assets/images/clinic.png";
import Email from "../../assets/images/email.png";
import Phone from "../../assets/images/phont.png";
import clock from "../../assets/images/clock.png";
import { color } from "framer-motion";

const Details = [
  { image: clinic, detailA: "clinic", detailB: "Kathmandu,Nepal" },
  { image: Email, detailA: "Email", detailB: "Shreedentalcare@gmail.com" },
  { image: Phone, detailA: "Phone", detailB: "98xxxxxxxxxx" },
  { image: clock, detailA: "Opening Hours", detailB: "8:00 AM - 6:00PM" },
];

function Map() {
  return (
    <>
      <div className="container-main-heading">
        <h3
          className="textcolor_secondary title_font"
          style={{ fontSize: "2.8rem" }}
        >
          Our{" "}
          <span
            className="textcolor_primary title_font"
            style={{ fontSize: "2.8rem" }}
          >
            Location
          </span>
        </h3>
      </div>
      <div className="container-map">
        <div className="container-map-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7740.5001165688755!2d85.33179999999922!3d27.697386963975422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1683345500791!5m2!1sen!2snp"
            style={{
              border: 0,
              width: "100%",
              height: "340px",
              margin: "12px 0px 65px 100px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container-map-right">
          {Details.map((map) => (
            <div className="map-content-feild">
              <img src={map.image} alt="image" />
              <div className="content-feild">
                <h3
                  className="title_font"
                  style={{ fontSize: "1.3rem", color: "blue" }}
                >
                  {map.detailA}
                </h3>
                <p className="title_font">{map.detailB}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Map;
