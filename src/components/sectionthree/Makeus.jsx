import React from "react";
import "./Makeus.css";
import imagec from "../../assets/images/image 41.png";
function Makeus() {
  return (
    <>
      <div className="container-makeus">
        <div className="content-left">
          <h1 className="textcolor_secondary" style={{ fontSize: "2.8rem" }}>
            What Makes Us
          </h1>
          <h2 className="textcolor_primary" style={{ fontSize: "2.8rem" }}>
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
      </div>
    </>
  );
}

export default Makeus;
