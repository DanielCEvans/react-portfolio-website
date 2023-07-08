import "./banner.css";
import React from "react";
import OCTOPUSLOGO from "../../assets/octopus-deploy.svg";

const Banner = () => {
  return (
    <div className="continer banner__container">
      <img src={OCTOPUSLOGO} alt="" style={{ width: "10%" }} />
    </div>
  );
};

export default Banner;
