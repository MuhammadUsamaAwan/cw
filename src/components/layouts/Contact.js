import React, { useEffect, useState } from "react";
import open from "../../assets/images/open.gif";

const Contact = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <section className={scroll ? "contact contact--none" : "contact"}>
      <ul>
        <li>
          <span className="contact__tfs">24/7</span>1-1518-935-2777
        </li>
        <li>
          <img src={open} alt="Open 24/7" />
        </li>
      </ul>
    </section>
  );
};

export default Contact;
