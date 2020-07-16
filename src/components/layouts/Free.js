import React from "react";
import { Link } from "react-router-dom";

const Free = () => {
  return (
    <section className="free-services">
      <h2 className="heading-secondary text-center mb-4">Free Services</h2>
      <div className="free-services__main">
        <p>
          24/7 ONLINE SUPPORT & LIVE CHAT
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$4.35</span>
        </p>
        <p>
          DIRECT WRITER COMMUNICATION
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$7.35</span>
        </p>
        <p>
          APA/MLA/CHICAGO/APSA/ AMA/ACS/IEEE FORMATTING
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$8.35</span>
        </p>
        <p>
          UNLIMITED SOURCES
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$1.35</span>
        </p>
        <p>
          TITLE PAGE & BIBLIOGRAPHY $7.55
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$7.35</span>
        </p>
        <p>
          14-DAY REVISION PERIOD
          <span className="free-services__main__free">Free</span>
          <span className="free-services__main__price">$8.35</span>
        </p>
      </div>

      <h3>
        Your Save: <span>$37.90</span>
      </h3>
      <div className="flex-center">
        <Link to="/" className="btn btn--secondary text-center">
          Order Now
        </Link>
        <Link to="/" className="btn btn--primary text-center ml-1">
          Live Chat
        </Link>
        <Link to="/" className="btn btn--tertiary text-center ml-1">
          Get 50% Off Here!
        </Link>
      </div>
    </section>
  );
};

export default Free;
