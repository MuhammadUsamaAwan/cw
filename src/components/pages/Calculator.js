import React from "react";

const Calculator = () => {
  return (
    <div className="calculator">
      <h3 className="calculator__heading">Calculate Price</h3>
      <ul className="calculator__level mb-2">
        <li className="calculator__active">High School</li>
        <li>College</li>
        <li>University</li>
        <li>PhD</li>
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
        <label htmlFor="pages">Quantity</label>
        <input
          type="number"
          id="pages"
          placeholder="1"
          min="1"
          max="999"
          size="3"
          maxlength="3"
          className="mb-2"
        />
        <button className="mb-2 calculator__active">Pages</button>
        <button className="mb-2">Words</button>
        <label htmlFor="date" className="ml-2">
          Deadline
        </label>
        <input type="date" id="date" className="mb-2" />
        <div className="calculator__form__price">
          Approx. Price <span>$12</span>
        </div>
        <input type="submit" value="Proceed to order &#8594;" id="submit" />
      </form>
    </div>
  );
};

export default Calculator;
