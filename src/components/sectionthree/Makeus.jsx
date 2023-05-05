import React from "react";
import "./Makeus.css";
import imagec from "../../assets/images/image 41.png";
function Makeus() {
  return (
    <>
      
        <div className="content-makeus-left">
          <h2 className="textcolor_secondary title_font" style={{ fontSize: "2.8rem" }}>
            What Makes Us
          </h2>
          <h2 className="textcolor_primary title_font" style={{ fontSize: "2.8rem" }}>
            More Special
          </h2>
          <ul>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        <div className="container-makeus-right">
          <img src={imagec} alt="" />
        </div>
    </>
  );
}

export default Makeus;
