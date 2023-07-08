import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Subject.PNG";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hi Octopus Deploy!</h1>
        <h5 className="text-light">I am</h5>
        <h2>Daniel Evans</h2>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
