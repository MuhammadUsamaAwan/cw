import React from "react";
import { Link } from "react-router-dom";

const GetHelp = () => {
  return (
    <section className="gethelp">
      <h2 className="heading-secondary text-center mb-4">
        Get quality help with any writing assignment
      </h2>
      <div className="gethelp__main mb-2">
        <div>Essay</div>
        <div>Case Study</div>
        <div>Book Review</div>
        <div>Term Paper</div>
        <div>Assignment</div>
        <div>Course Work</div>
        <div>Dissertation</div>
        <div>Article</div>
        <div className="gethelp__main__box">
          <div>
            <i className="fa fa-file-text-o"></i>
            <h3>Essay</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            rhoncus semper ante, sed feugiat magna ultricies nec. In in ante a
            nunc dignissim porta et et enim. Nulla ut sodales odio, quis
            fringilla nunc.{" "}
          </p>
          <div className="gethelp__main__box__price">
            $ 13.49<span>*price per price</span>
          </div>
          <div className="gethelp__main__box__arrow">
            <i className="fa fa-angle-left"></i>
            <i className="fa fa-angle-right float-right"></i>
          </div>
        </div>
      </div>
      <div className="flex-center">
        <Link to="/" className="btn btn--primary text-center">
          Calculate the paper cost
        </Link>
      </div>
    </section>
  );
};

export default GetHelp;
