import React from "react";

export default function Mainstore() {
  return (
    <div className="mainstore">
      <div className="container">
        <h1>
          Swords, weapons & gear <br /> for HEMA and historical fencing
        </h1>
        <p className="para1">
          To allow everyone to equip themselves quickly and at the best price,
          <br className="break" />
          we have designed equipment packs specially adapted{" "}
          <br className="break" />
          to each practice of HEMA.
        </p>
        <div className="cards">
          <div className="card">
            <img
              src="./src/MyComponents/images/May 21, 2025, 01_00_06 PM.png"
              alt=""
            />
            <div className="text">
              <div className="txt">
                <span>Swords</span>
                <p>
                  These weapons have shaped <br /> the art of Western combat.
                </p>
              </div>
              <div className="btn">
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/MyComponents/images/ChatGPT Image May 21, 2025, 01_04_50 PM.png"
              alt=""
            />
            <div className="text">
              <div className="txt">
                <span>Masks</span>
                <p>
                  These weapons have shaped <br /> the art of Western combat.
                </p>
              </div>
              <div className="btn">
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/MyComponents/images/ChatGPT Image May 21, 2025, 01_07_37 PM.png"
              alt=""
            />
            <div className="text">
              <div className="txt">
                <span>Gloves</span>
                <p>
                  These weapons have shaped <br /> the art of Western combat.
                </p>
              </div>
              <div className="btn">
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/MyComponents/images/ChatGPT Image May 21, 2025, 01_11_31 PM.png"
              alt=""
            />
            <div className="text">
              <div className="txt">
                <span>Jackets</span>
                <p>
                  These weapons have shaped <br /> the art of Western combat.
                </p>
              </div>
              <div className="btn">
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}