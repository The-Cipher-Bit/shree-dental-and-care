import React from "react";
import "./Makeus.css";
import imagec from "../../assets/images/image 41.png"
function Makeus() {
  return (
    <>
      <div className="container-makeus">
        <div className="content-left">
          <h1>What Makes Us More</h1>
          <h2>Special</h2>
          <ul>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </li>
            <li className="verified">
              lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </li>
          </ul>
        </div>
        <img src={imagec} alt="" />
      </div>
    </>
  );
}

export default Makeus;
