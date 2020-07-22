import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [checked, setChecked] = useState(false);
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
  const clickHandler = () => setChecked(!checked);

  return (
    <nav className={scroll ? "navigation navigation--scroll" : "navigation"}>
      <Link to="/">
        <Logo />
      </Link>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="nav-toggle"
        checked={checked}
      />
      <label
        className="navigation__icon"
        htmlFor="nav-toggle"
        onClick={clickHandler}
      />
      <ul>
        <li>
          <Link exact="true" to="/" onClick={clickHandler}>
            Home
          </Link>
        </li>
        <li>
          <a href="/#free-services" onClick={clickHandler}>
            Our sevices
          </a>
        </li>
        <li>
          <Link exact="true" to="/login" onClick={clickHandler}>
            prices
          </Link>
        </li>
        <li>
          <Link exact="true" to="/login" onClick={clickHandler}>
            guarantees
          </Link>
        </li>
        <li>
          <Link exact="true" to="/login" onClick={clickHandler}>
            Contact us
          </Link>
        </li>
        <li>
          <Link
            exact="true"
            to="/login"
            className="navigation__primary"
            onClick={clickHandler}
          >
            Order now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
