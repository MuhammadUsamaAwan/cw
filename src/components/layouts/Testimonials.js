import React from "react";
import user1 from "../../assets/images/user1.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="heading-secondary text-center mb-4">User Testimonials</h2>
      <div className="testimonials__main">
        <i className="fa fa-angle-left"></i>

        <figure class="review">
          <blockquote class="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          <figcaption class="review__user">
            <img src={user1} alt="User 1" class="review__photo" />
            <div class="review__user-box">
              <p class="review__user-name">Mary Smith</p>
              <p class="review__user-date">Feb 23rd, 2017</p>
            </div>
            <div class="review__rating">7.8</div>
          </figcaption>
        </figure>

        <figure class="review">
          <blockquote class="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          <figcaption class="review__user">
            <img src={user1} alt="User 1" class="review__photo" />
            <div class="review__user-box">
              <p class="review__user-name">Mary Smith</p>
              <p class="review__user-date">Feb 23rd, 2017</p>
            </div>
            <div class="review__rating">7.8</div>
          </figcaption>
        </figure>

        <i className="fa fa-angle-right"></i>
      </div>
    </section>
  );
};

export default Testimonials;
