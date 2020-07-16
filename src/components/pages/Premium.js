import React from "react";
import { ReactComponent as Zero } from "../../assets/images/zero-plag.svg";
import { ReactComponent as Quality } from "../../assets/images/premium.svg";

const Premium = () => {
  return (
    <section className="premium mb-6">
      <div>
        <Quality className="premium__icon" />
        <h3>Premium Quality</h3>
        <p>
          We have expertise in all academic subjects. All writing is custom
          content and high quality.
        </p>
      </div>
      <div>
        <Zero className="premium__icon" />
        <h3>Zero plagiarism</h3>
        <p>
          We do not resell or archive any research or any writing. Your research
          paper will never appear online or anywhere else…unless you put it
          there.
        </p>
      </div>
    </section>
  );
};

export default Premium;
