import React from "react";

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
                src="./src/MyComponents/images/Screenshot 2025-05-21 184448.png"
                alt=""
              />
              <span id="one">"Black Fencer"<br /> Feder Sword 4.0</span>
              <span id="two">Available for order</span>
              <span id="three">&#8364;59.00</span>
            </div>
            <div className="box">
              <img
                src="./src/MyComponents/images/Screenshot 2025-05-21 184457.png"
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
                src="./src/MyComponents/images/Screenshot 2025-05-21 184504.png"
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
            src="./src/MyComponents/images/ChatGPT Image May 21, 2025, 07_16_35 PM.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
