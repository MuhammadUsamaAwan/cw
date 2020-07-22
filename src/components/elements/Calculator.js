import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [level, setLevel] = useState("high-school");
  const [quantity, setQuantity] = useState({ amount: 1, name: "pages" });
  const [date, setDate] = useState();
  const [price, setPrice] = useState(12);

  useEffect(() => {
    let temp;
    if (level === "high-school") temp = 2;
    if (level === "college") temp = 4;
    if (level === "university") temp = 10;
    if (level === "phd") temp = 14;
    if (quantity.name === "pages") setPrice((10 + temp) * quantity.amount);
    else setPrice((10 + temp) * Math.ceil(quantity.amount / 299));
  }, [quantity, level]);

  const levelHandler = (e) => setLevel(e.target.id);

  const quantityHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "pages") setQuantity({ name: "pages", amount: 1 });
    else setQuantity({ name: "words", amount: 250 });
  };

  const changeHandler = (e) =>
    setQuantity({ ...quantity, amount: e.target.value });

  const dateHandler = (e) => {
    if (new Date() < e.target.value) setDate(e.target.value);
  };

  return (
    <div className="calculator">
      <h3 className="calculator__heading">Calculate Price</h3>
      <ul className="calculator__level mb-2">
        <li
          className={level === "high-school" ? "calculator__active" : ""}
          id="high-school"
          onClick={levelHandler}
        >
          High School
        </li>
        <li
          className={level === "college" ? "calculator__active" : ""}
          id="college"
          onClick={levelHandler}
        >
          College
        </li>
        <li
          className={level === "university" ? "calculator__active" : ""}
          id="university"
          onClick={levelHandler}
        >
          University
        </li>
        <li
          className={level === "phd" ? "calculator__active" : ""}
          id="phd"
          onClick={levelHandler}
        >
          PhD
        </li>
      </ul>

      <form className="calculator__form">
        <label htmlFor="paper-type">Type of Paper</label>
        <select name="paper-type" id="paper-type" defaultValue="Essay">
          <option value="Annotated Bibliography">Annotated bibliography</option>
          <option value="Argumentative Essay">Argumentative essay</option>
          <option value="Article">Article</option>
          <option value="Article Review">Article review</option>
          <option value="Biography">Biography</option>
          <option value="Book Review">Book review</option>
          <option value="Business Plan">Business plan</option>
          <option value="Capstone Project">Capstone project</option>
          <option value="Case study">Case study</option>
          <option value="Coursework">Coursework</option>
          <option value="Creative Writing">Creative writing</option>
          <option value="Critical thinking">Critical thinking</option>
          <option value="Online Lecture to Summary">
            Online Lecture to Summary
          </option>
          <option value="Essay">Essay</option>
          <option value="Exam Notes">Exam notes</option>
          <option value="Lap Reports">Lab report</option>
          <option value="Literature Review">Literature review</option>
          <option value="Movie Review">Movie review</option>
          <option value="Poster presentation">Poster presentation</option>
          <option value="Presentation">Presentation</option>
          <option value="Question &amp; Answer<">Question &amp; Answer</option>
          <option value="Reflective report">Reflective report</option>
          <option value="Report">Report</option>
          <option value="Research paper">Research paper</option>
          <option value="Research proposal">Research proposal</option>
          <option value="Speech">Speech</option>
          <option value="Term paper">Term paper</option>
          <option value="Thesis">Thesis</option>
          <option value="Thesis Proposal">Thesis proposal</option>
          <option value="Thesis Statement">Thesis statement</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          min={quantity.name === "pages" ? "1" : "250"}
          max={quantity.name === "pages" ? "999" : "10000"}
          className="mb-2"
          value={quantity.amount}
          onChange={changeHandler}
        />
        <button
          id="pages"
          onClick={quantityHandler}
          className={
            quantity.name === "pages"
              ? "calculator__active mb-2 ml-1"
              : "mb-2 ml-1"
          }
        >
          Pages
        </button>
        <button
          id="words"
          onClick={quantityHandler}
          className={
            quantity.name === "words"
              ? "calculator__active mb-2 ml-1"
              : "mb-2 ml-1"
          }
        >
          Words
        </button>
        <label htmlFor="date" className="ml-2">
          Deadline
        </label>
        <input
          type="date"
          id="date"
          className="mb-2 ml-1"
          value={date}
          onChange={dateHandler}
        />
        <div className="calculator__form__price">
          Approx. Price <span>${price}</span>
        </div>
        <input
          type="submit"
          value="Proceed to order &#8594;"
          className="btn-submit btn--primary flex-center"
        />
      </form>
    </div>
  );
};

export default Calculator;
