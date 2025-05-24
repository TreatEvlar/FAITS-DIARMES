import React from "react";

export default function Weapon() {
  return (
    <div>
        <div className="weapon">
            <div className="first">
                <img src="./src/MyComponents/images/Screenshot 2025-05-23 131846.png" alt="" />
            </div>
            <div className="second">
                <div className="heading">
                    <h1>Sword & Weapons</h1>
                    <a href="#">VIEW ALL &#8594;</a>
                </div>
                <div className="items">
                    <div className="box">
                        <img src="./src/MyComponents/images/Screenshot 2025-05-23 131929.png" alt="" />
                        <h2>Italian rapier "Regenyei"</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src="./src/MyComponents/images/Screenshot 2025-05-23 131940.png" alt="" />
                        <h2>Rubber Axe Head</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src="./src/MyComponents/images/Screenshot 2025-05-23 131957.png" alt="" />
                        <h2>"Black Fencer" Rapier</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                    <div className="box">
                        <img src="./src/MyComponents/images/Screenshot 2025-05-23 132010.png" alt="" />
                        <h2>Foam Rapier with Retractable Tip</h2>
                        <p>Available for order</p>
                        <span>&#8364;59.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
