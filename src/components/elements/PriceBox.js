import React from "react";

const PriceBox = ({ heading, text, price }) => {
  return (
    <div className="gethelp__main__box">
      <div>
        <i className="fa fa-file-text-o"></i>
        <h3>{heading}</h3>
      </div>
      <p>{text}</p>
      <div className="gethelp__main__box__price">
        $ {price}
        <span>*price per price</span>
      </div>
    </div>
  );
};

export default PriceBox;
