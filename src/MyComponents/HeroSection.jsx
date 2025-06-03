import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/308/538/421/fantasy-samurai-armor-fight-katana-hd-wallpaper-preview.jpg"
          alt=""
        />
        <div className="items">
          <span>For 10 years</span>
          <h1>
            Suppliers of the <br /> HEMA fellowship
          </h1>
          <p>Explore historical European martial arts.</p>
          <button>SHOP EQUIPMENT NOW</button>
        </div>

        <div className="others">
          <span>In the photo:</span>
          <p>Federschwert classic, 350N Fencing Mask, Hema Jacket</p>
        </div>
      </div>
    </div>
  );
}
