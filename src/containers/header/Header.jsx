import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import ReactPlayer from 'react-player';
import PlayerComponent from "./PlayerComponent";
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h3 class="white-heading gc">
          We Create Learning Experience With Excellent Technology.
        </h3>
        <p>
          Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs - All Included In Your Subscription
       </p>
        <div className="button-container">
          <button type="button" className="rounded-button" >Book Demo Class</button>
          
            <p>Explore More</p>
            <FiArrowRight />
       
        </div> 
      </div>
      <div className="gpt3__header-image">
        <PlayerComponent />
      </div>
    </div>
  );
};

export default Header;
