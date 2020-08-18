import React from "react";
import "./Index.css";
import Logo from "../../components/Logo/Logo";
import Sports from "../../assets/img/sports.svg";
import News from "../../assets/img/newsPaper.svg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="Index">
      <div className="IndexLogo">
        <Logo />
      </div>

      <div className="Index__Left">
        <div className="Index__Left--img">
          <img src={Sports} alt="Sports" />
        </div>
        <div className="Index__Left--text">
          <p>Want to know more about sports details according to country?</p>
        </div>
        <Link to="/sports" className="Index__Left--btn">
          Click Here
        </Link>

        <Link to="/aboutus" className="Index__Left--about">
          About Us
        </Link>
      </div>
      <div className="Index__Right">
        <div className="Index__Right--img">
          <img src={News} alt="Sports" />
        </div>
        <div className="Index__Right--text">
          <p>Want to know more about sports news?</p>
        </div>
        <Link to="/news" className="Index__Right--btn">
          Click Here
        </Link>
        <Link to="/contactus" className="Index__Right--contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Index;
