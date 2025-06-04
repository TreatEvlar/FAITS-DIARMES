import React from "react";
import miniFirstImage from "/src/assets/images/Screenshot 2025-05-21 184448.png";
import miniSecondImage from "/src/assets/images/Screenshot 2025-05-21 184457.png";
import miniThirdImage from "/src/assets/images/Screenshot 2025-05-21 184504.png";
import miniForthImage from "/src/assets/images/ChatGPT Image May 21, 2025, 07_16_35 PM.png";

export default function Ministore() {
  return (
    <div className="ministore">
      <div className="container">
        <div className="first">
          <div className="one">
            <div className="txt">
              <h1>New products</h1>
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
                src={miniFirstImage}
                alt=""
              />
              <span id="one">"Black Fencer"<br /> Feder Sword 4.0</span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
            <div className="box">
              <img
                src={miniSecondImage}
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
                src={miniThirdImage}
                alt=""
              />
              <span id="one">"Cold Steel"<br /> Parrying dagger</span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
          </div>
        </div>
        <div className="second">
          <img
            src={miniForthImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
