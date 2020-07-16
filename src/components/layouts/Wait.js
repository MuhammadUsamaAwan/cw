import React from "react";

const Wait = () => {
  return (
    <section className="why-wait">
      <h2 className="heading-secondary text-center mb-4">
        Why wait? Place an order right now!
        <span>
          Just fill out the form, press the button, and have no worries!
        </span>
      </h2>
      <form className="why-wait__form">
        <select defaultValue="Essay">
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
        <input type="email" placeholder="Your email" id="email" />
        <input type="submit" value="Continue" id="submit" />
      </form>
      <p>
        By clicking “CONTINUE”, you agree to our terms of service and privacy
        policy. We’ll occasionally send you promo and account related emails.
      </p>
    </section>
  );
};

export default Wait;
