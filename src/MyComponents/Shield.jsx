import React from "react";
import shieldFirstImage from "/src/assets/images/Screenshot 2025-05-24 180202.png";
import shieldSecondImage from "/src/assets/images/Screenshot 2025-05-24 180217.png";
import shieldThirdImage from "/src/assets/images/Screenshot 2025-05-24 180234.png";
import shieldForthImage from "/src/assets/images/Screenshot 2025-05-24 180249.png";
import shieldFifthImage from "/src/assets/images/Screenshot 2025-05-24 180258.png";

export default function Shield() {
  return (
    <div>
        <div className="shield">
            <div className="first">
                <img src={shieldFirstImage} alt="" />
            </div>
            <div className="second">
                <div className="heading">
                    <h1>Shields</h1>
                    <a href="#">VIEW ALL &#8594;</a>
                </div>
                <div className="items">
                    <div className="box">
                        <img src={shieldSecondImage} alt="" />
                        <h2>PVC target</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={shieldThirdImage} alt="" />
                        <h2>Foam Shield - Child</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={shieldForthImage} alt="" />
                        <h2>Synthetic buckle "Talhoffer"</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src={shieldFifthImage} alt="" />
                        <h2>Traditional buckle</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
