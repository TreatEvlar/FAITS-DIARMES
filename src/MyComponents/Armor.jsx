import React from "react";
import armorFirstImage from "/src/assets/images/Screenshot 2025-05-24 175503.png";
import armorSecondImage from "/src/assets/images/Screenshot 2025-05-24 175512.png";
import armorThirdImage from "/src/assets/images/Screenshot 2025-05-24 175519.png";
import armorForthImage from "/src/assets/images/Screenshot 2025-05-24 175525.png";
import armorFifthImage from "/src/assets/images/Screenshot 2025-05-24 175539.png";

export default function Armor() {
  return (
    <div>
        <div className="Armor">
            <div className="second">
                <div className="heading">
                    <h1>Protective Equipment</h1>
                    <a href="#">VIEW ALL &#8594;</a>
                </div>
                <div className="items">
                    <div className="box">
                        <img src={armorFirstImage} alt="" />
                        <h2>AP Plus 350N PRO Jacket - Men</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={armorSecondImage} alt="" />
                        <h2>MAC ARMOUR Fencing Gloves</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={armorThirdImage} alt="" />
                        <h2>Hussar 800N Jacket - Men</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={armorForthImage} alt="" />
                        <h2>Reinforced tactical shorts</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                </div>
            </div>
            <div className="first">
                <img src={armorFifthImage} alt="" />
            </div>
        </div>
    </div>
  );
}
