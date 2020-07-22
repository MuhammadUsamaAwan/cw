import React from "react";
import { ReactComponent as Zero } from "../../assets/images/zero-plag.svg";
import { ReactComponent as Quality } from "../../assets/images/premium.svg";
import ScrollAnimation from "react-animate-on-scroll";

const Premium = () => {
  return (
    <section className="premium">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
        <Quality className="premium__icon" />
        <h3 className="heading-tertiary">Premium Quality</h3>
        <p>
          We have expertise in all academic subjects. All writing is custom
          content and high quality.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1000}>
        <Zero className="premium__icon" />
        <h3 className="heading-tertiary">Zero plagiarism</h3>
        <p>
          We do not resell or archive any research or any writing. Your research
          paper will never appear online or anywhere else…unless you put it
          there.
        </p>
      </ScrollAnimation>
    </section>
  );
};

export default Premium;
