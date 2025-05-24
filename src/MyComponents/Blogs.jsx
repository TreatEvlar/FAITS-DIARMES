import React from "react";

export default function Blog() {
  return (
    <div className="blog">
        <div className="container">
            <div className="first">
                <h1>Our Blogs</h1>
                <a href="#">VIEW ALL &#8594;</a>
            </div>

            <div className="second">
                <div className="card">
                    <span>More &#8594;</span>
                    <img src="./src/MyComponents/images/ChatGPT Image May 24, 2025, 06_20_25 PM.png" alt="" />
                    <a>Interior</a>
                    <p>5 tips to give you some idea for your smart house</p>
                </div>
                <div className="card">
                    <img src="./src/MyComponents/images/ChatGPT Image May 24, 2025, 06_30_46 PM.png" alt="" />
                    <a>Interior</a>
                    <p>5 tips to give you some idea for your smart house</p>
                    <span>More &#8594;</span>
                </div>
                <div className="card">
                    <img src="./src/MyComponents/images/ChatGPT Image May 24, 2025, 08_59_20 PM.png" alt="" />
                    <a>Interior</a>
                    <p>5 tips to give you some idea for your smart house</p>
                    <span>More &#8594;</span>
                </div>
            </div>
        </div>
    </div>
  );
}
