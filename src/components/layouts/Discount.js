import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <section className="discount">
      <h2 className="heading-secondary">
        Special Offer
        <span>
          50% Discount <span>on all your orders!</span>
        </span>
      </h2>
      <Link to="/" className="btn btn--secondary text-center">
        Order Now
      </Link>
      <Link to="/" className="btn btn--primary text-center ml-1">
        Live Chat
      </Link>
    </section>
  );
};

export default Discount;
