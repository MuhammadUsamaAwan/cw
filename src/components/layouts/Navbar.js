import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <nav className={scroll ? "navigation navigation--scroll" : "navigation"}>
      <Link to="/" component={Logo}></Link>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label className="navigation__icon" htmlFor="nav-toggle" />
      <ul>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link exact to="/login">
            Our sevices
          </Link>
        </li>
        <li>
          <Link exact to="/login">
            prices
          </Link>
        </li>
        <li>
          <Link exact to="/login">
            guarantees
          </Link>
        </li>
        <li>
          <Link exact to="/login">
            Contact us
          </Link>
        </li>
        <li>
          <Link exact to="/login" className="navigation__primary">
            Order now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
