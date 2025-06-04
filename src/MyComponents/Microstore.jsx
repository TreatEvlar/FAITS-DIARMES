import React from "react";
import microFirstImage from "/src/assets/images/ChatGPT Image May 21, 2025, 07_16_35 PM.png";
import microSecondImage from "/src/assets/images/Screenshot 2025-05-21 184448.png";
import microThirdImage from "/src/assets/images/Screenshot 2025-05-21 184457.png";
import microForthImage from "/src/assets/images/Screenshot 2025-05-21 184504.png";
import microFifthImage from "/src/assets/images/ChatGPT Image May 21, 2025, 07_16_35 PM.png";

export default function Microstore() {
  return (
    <div className="microstore">
      <div className="container">
        <div className="second">
          <img
            src={microFirstImage}
            alt=""
          />
        </div>
        <div className="first">
          <div className="one">
            <div className="txt">
              <h1>The essentials</h1>
              <p>
                Explore our newest modes of swords, weapons,<br /> protective gear, &
                other.
              </p>
            </div>
            <div className="nxt">
              <a href="#">VIEW ALL &#8594;</a>
            </div>
          </div>
          <hr />
          <div className="two">
            <div className="box">
              <img
                src={microSecondImage}
                alt=""
              />
              <span id="one">"Black Fencer"<br /> Feder Sword 4.0</span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
            <div className="box">
              <img
                src={microThirdImage}
                alt=""
              />
              <span id="one">
                Historical fencing gloves <br /> made of padded leather
              </span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
            <div className="box">
              <img
                src={microForthImage}
                alt=""
              />
              <span id="one">"Cold Steel"<br /> Parrying dagger</span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
          </div>
        </div>
        <div className="third">
          <img
            src={microFifthImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
