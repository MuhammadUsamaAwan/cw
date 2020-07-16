import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" component={Logo}></Link>
      <p>
        All of papers you get at Samedayessay.com are meant for research
        purposes only. The papers are not supposed to be submitted for academic
        credit.
      </p>
      <div className="footer__social">
        <i className="fa fa-pinterest-p"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-youtube-play"></i>
        <i className="fa fa-instagram"></i>
      </div>
      <div>
        <Link to="/">Terms & Conditions</Link>
        <span className="footer__seperator">|</span>
        <Link to="/">Privacy Policy</Link>
        <span className="footer__seperator">|</span>
        <Link to="/">Contact</Link>
      </div>
      <div className="footer__currency">
        <i className="fa fa-cc-amex"></i>
        <i className="fa fa-cc-mastercard"></i>
        <i className="fa fa-cc-visa"></i>
        <i className="fa fa-cc-discover"></i>
      </div>
      <p className="footer__copy">© 2020 Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
