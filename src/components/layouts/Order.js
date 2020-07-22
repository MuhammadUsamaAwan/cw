import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Order = () => {
  return (
    <section className="order">
      <h2 className="heading-secondary text-center mb-4">
        How to place an order
      </h2>
      <div className="order__main">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={500}
          className="order__main__step"
        >
          <i className="fa fa-tv"></i>
          <h3>1</h3>
          <p>
            Choose the type of paper you need written, the number of pages,
            deadline, and other requirements.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={750}>
          <i className="fa fa-long-arrow-right"></i>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={1000}
          className="order__main__step"
        >
          <i className="fa fa-envelope"></i>
          <h3>2</h3>
          <p>
            Select a few writers from our list and then contact a few of them
            via our live chat function to choose the writer that’s right for
            you.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1250}>
          <i className="fa fa-long-arrow-right"></i>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={1500}
          className="order__main__step"
        >
          <i className="fa fa-pencil"></i>
          <h3>3</h3>
          <p>
            Add funds to your balance and the writer will start working on your
            paper. You can even stay in touch with your writer as they work on
            your order.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1750}>
          <i className="fa fa-long-arrow-right"></i>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={2000}
          className="order__main__step"
        >
          <i className="fa fa-money"></i>
          <h3>4</h3>
          <p>
            Pay the writer only for a finished, plagiarism-free paper that meets
            all your requirements.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Order;
