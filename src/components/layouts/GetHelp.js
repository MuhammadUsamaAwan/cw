import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceBox from "../elements/PriceBox";

const GetHelp = () => {
  const [option, setOption] = useState("Essay");
  const optionHandler = (e) => setOption(e.target.id);
  const clickHandler = (e) => {
    const tempArr = [
      "Essay",
      "Case Study",
      "Book Review",
      "Term Paper",
      "Assignment",
      "Course Work",
      "Dissertation",
      "Article",
    ];
    tempArr.forEach((element) => {
      if (element === option) {
        if (e.target.className.includes("right")) {
          if (tempArr[tempArr.indexOf(element) + 1] !== undefined)
            setOption(tempArr[tempArr.indexOf(element) + 1]);
          else setOption(tempArr[0]);
        } else {
          if (tempArr[tempArr.indexOf(element) - 1] !== undefined)
            setOption(tempArr[tempArr.indexOf(element) - 1]);
          else setOption(tempArr[7]);
        }
      }
    });
  };
  return (
    <section className="gethelp">
      <h2 className="heading-secondary text-center mb-4">
        Get quality help with any writing assignment
      </h2>
      <div className="gethelp__main mb-2">
        <div
          id="Essay"
          onClick={optionHandler}
          className={
            option === "Essay"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Essay
        </div>
        <div
          id="Case Study"
          onClick={optionHandler}
          className={
            option === "Case Study"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Case Study
        </div>
        <div
          id="Book Review"
          onClick={optionHandler}
          className={
            option === "Book Review"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Book Review
        </div>
        <div
          id="Term Paper"
          onClick={optionHandler}
          className={
            option === "Term Paper"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Term Paper
        </div>
        <div
          id="Assignment"
          onClick={optionHandler}
          className={
            option === "Assignment"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Assignment
        </div>
        <div
          id="Course Work"
          onClick={optionHandler}
          className={
            option === "Course Work"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Course Work
        </div>
        <div
          id="Dissertation"
          onClick={optionHandler}
          className={
            option === "Dissertation"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Dissertation
        </div>
        <div
          id="Article"
          onClick={optionHandler}
          className={
            option === "Article"
              ? "gethelp__main__options  gethelp__main__options--active"
              : "gethelp__main__options"
          }
        >
          Article
        </div>
        <PriceBox
          heading={option}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus
        semper ante, sed feugiat magna ultricies nec. In in ante a nunc
        dignissim porta et et enim. Nulla ut sodales odio, quis fringilla nunc."
          price="13.49"
        />
        <div className="gethelp__main__box__arrow">
          <i className="fa fa-angle-left" onClick={clickHandler}></i>
          <i
            className="fa fa-angle-right float-right"
            onClick={clickHandler}
          ></i>
        </div>
      </div>
      <div className="flex-center">
        <Link to="/" className="btn btn--secondary text-center">
          Calculate the paper cost
        </Link>
      </div>
    </section>
  );
};

export default GetHelp;
