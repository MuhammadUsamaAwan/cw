import React from "react";

const UserReview = ({ text, img, name, date, rating }) => {
  return (
    <figure className="review">
      <blockquote className="review__text">{text}</blockquote>
      <figcaption className="review__user">
        <img src={img} alt="User 1" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{name}</p>
          <p className="review__user-date">{date}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </figure>
  );
};

export default UserReview;
