import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Calculator from "../elements/Calculator";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <h1 className="heading-primary">We write amazing</h1>
        <Typed
          className="heading-animation"
          strings={[
            "Articles",
            "City Pages",
            "Product Descriptions",
            "Catagory Pages",
            "White Pages",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
        <h2 className="heading-primary-sub mb-2 mt-2">
          Hire the Web's Best Content Writers With Our Professional Content
          Writing Services
        </h2>

        <Link to="/" className="btn btn--primary text-center">
          Order Now
        </Link>
        <Link to="/" className="btn btn--secondary text-center ml-2">
          Live Chat
        </Link>
      </div>

      <Calculator />
    </header>
  );
};

export default Header;
