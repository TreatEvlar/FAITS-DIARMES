import React from "react";
import { FaCrown, FaHorse } from "react-icons/fa";

export default function Ads() {
  return (
    <div className="ads">
      <div className="first">
        <img
          src="./src/MyComponents/images/May 22, 2025, 04_06_34 PM.png"
          alt=""
        />
      </div>

      <div className="second">
        <div className="txt">
          <h1>
            Swords, weapons & gear <br /> for HEMA and Historical <br /> fencing
          </h1>
          <p>
            To allow everyone to equip themselves quickly and at the best price,
            <br />
            we have designed equipment packs specially adapted <br /> to each
            practice of HEMA.
          </p>
          <a href="#">VIEW BEST DEALS &#8594;</a>
        </div>
        <div className="icon">
          <div className="one-1">
            <FaCrown className="facrown"/>
            <h2>You are the King!</h2>
            <p>
              And you can count on our support in <br /> your quest for the greatest
              equipment.
            </p>
          </div>
          <div className="two-2">
            <FaHorse className="fahorse"/>
            <h2>Faster, noble steed!</h2>
            <p>Your orders are prepared and shipped <br /> within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
