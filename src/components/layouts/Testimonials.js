import React from "react";
import user1 from "../../assets/images/user1.jpg";
import UserReview from "../elements/UserReview";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="heading-secondary text-center mb-4">User Testimonials</h2>
      <div className="testimonials__main">
        <i className="fa fa-angle-left"></i>
        <div>
          <UserReview
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
            name="Mary Smith"
            rating="7.8"
            date="Feb 23rd, 2020"
            img={user1}
          />
        </div>
        <div>
          <UserReview
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex."
            name="Mary Smith"
            rating="7.8"
            date="Feb 23rd, 2020"
            img={user1}
          />
        </div>
        <i className="fa fa-angle-right"></i>
      </div>
    </section>
  );
};

export default Testimonials;
