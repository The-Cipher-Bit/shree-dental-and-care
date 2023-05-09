import React from "react";
import "./Makeus.css";
import imagec from "../../assets/images/image 41.png";
function Makeus() {
  return (
    <>
      <div className="container-makeus">
        <div className="content-makeus-left">
          <h2
            className="textcolor_secondary title_font"
            style={{ fontSize: "2.8rem" }}
          >
            What Makes Us
          </h2>
          <h2
            className="textcolor_primary title_font"
            style={{ fontSize: "2.8rem" }}
          >
            More Special
          </h2>
          <ul>
            <li className="verified">Experienced and skilled dental team</li>
            <li className="verified">
              Personalized treatment plans for each patient
            </li>
            <li className="verified">
              Use of advanced technology and equipment
            </li>
            <li className="verified">
              Comfortable and relaxing patient environment
            </li>
            <li className="verified">Wide range of dental services</li>
          </ul>
        </div>
        <div className="container-makeus-right">
          <img src={imagec} alt="" />
        </div>
      </div>
    </>
  );
}

export default Makeus;
