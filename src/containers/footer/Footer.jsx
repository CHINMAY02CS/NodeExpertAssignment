import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
import Logo from "../../assets/Logo.png";
import facebookLogo from "../../assets/facebook.png"
import twitterLogo from "../../assets/twitter.png"
import pinterestLogo from "../../assets/pinterest.png"
import instagramLogo from "../../assets/instagram.png"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
     
     <div className="gpt3__footer-links">
    <div className="gpt3__navbar-links_logo">
        <p style={{ color: "grey", fontSize: "x-large", display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Logo" style={{ marginRight: "1rem" }} />
            Learning Exp.
        </p>
        <p style={{ color: "grey" }}> {/* New paragraph for logos */}
            <img src={facebookLogo} alt="Facebook" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "0.5rem" }} />
            <img src={twitterLogo} alt="Twitter" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "0.5rem" }} />
            <img src={instagramLogo} alt="Instagram" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "0.5rem" }} />
            <img src={pinterestLogo} alt="Pinterest" style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "0.5rem" }} />
        </p>
    </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Home</p>
          <p>Pricing</p>
          <p>Download</p>
          <p>About</p>
          <p>Service</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Support</h4>
          <p>FAQ</p>
          <p>How It </p>
          <p>Features</p>
          <p>Contact</p>
          <p>Reporting</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact Us</h4>
          <p>+880 12345678</p>
          <p> youremail@gmail.co</p>
          <p>Pune City</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
