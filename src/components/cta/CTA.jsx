import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>Contact Us !</h3>
        <p>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
      </div>
     
      <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email here" />
          <button type="button" className="rounded-button">
          Send
        </button>
       
      </div>
    </div>
  );
};

export default CTA;
