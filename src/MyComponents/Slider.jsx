import React, { useRef, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";
import { RiStarSFill } from "react-icons/ri";
import sliderFirstImage from "/src/assets/images/Screenshot 2025-05-23 205221.png";
import sliderSecondImage from "/src/assets/images/Screenshot 2025-05-23 205240.png";
import sliderThirdImage from "/src/assets/images/Screenshot 2025-05-23 205256.png";
import sliderForthImage from "/src/assets/images/Screenshot 2025-05-23 205312.png";
import sliderFifthImage from "/src/assets/images/Screenshot 2025-05-23 205330.png";
import sliderSixthImage from "/src/assets/images/Screenshot 2025-05-23 205350.png";
import sliderSeventhImage from "/src/assets/images/Screenshot 2025-05-23 205403.png";

export default function Slider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const boxCount = 4;

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : boxCount - 1;
    setCurrentIndex(newIndex);
    updateSlider(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex < boxCount - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    updateSlider(newIndex);
  };

  const updateSlider = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sliderdiv">
      <div className="container">
        <div className="first">
          <div className="leftslide" onClick={scrollLeft}>
              <VscArrowCircleLeft />
            </div>
          <div className="slider" ref={sliderRef}>
            <div className="slide">
              <span>
                <ImQuotesLeft />
              </span>
              <h1>Un buon acquisto</h1>
              <div className="icons">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam{" "}
                <br /> distinctio soluta veniam quidem? Aspernatur doloremque{" "}
                <br /> cumque repudiandae fugiat.
              </p>
              <span>
                <ImQuotesRight />
              </span>
              <h2>
                Silvio G. <span>- 09/04/2024</span>
              </h2>
            </div>
            <div className="slide">
              <span>
                <ImQuotesLeft />
              </span>
              <h1>Un buon acquisto</h1>
              <div className="icons">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam{" "}
                <br /> distinctio soluta veniam quidem? Aspernatur doloremque{" "}
                <br /> cumque repudiandae fugiat.
              </p>
              <span>
                <ImQuotesRight />
              </span>
              <h2>
                Silvio G. <span>- 09/04/2024</span>
              </h2>
            </div>
            <div className="slide">
              <span>
                <ImQuotesLeft />
              </span>
              <h1>Un buon acquisto</h1>
              <div className="icons">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam{" "}
                <br /> distinctio soluta veniam quidem? Aspernatur doloremque{" "}
                <br /> cumque repudiandae fugiat.
              </p>
              <span>
                <ImQuotesRight />
              </span>
              <h2>
                Silvio G. <span>- 09/04/2024</span>
              </h2>
            </div>
            <div className="slide">
              <span>
                <ImQuotesLeft />
              </span>
              <h1>Un buon acquisto</h1>
              <div className="icons">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam{" "}
                <br /> distinctio soluta veniam quidem? Aspernatur doloremque{" "}
                <br /> cumque repudiandae fugiat.
              </p>
              <span>
                <ImQuotesRight />
              </span>
              <h2>
                Silvio G. <span>- 09/04/2024</span>
              </h2>
            </div>
          </div>
          <div className="rightslide" onClick={scrollRight}>
              <VscArrowCircleRight />
            </div>
        </div>
        <div className="second">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td><img
              src={sliderFirstImage}
              alt=""
            /></td>
                <td><img
              src={sliderSecondImage}
              alt=""
            /></td>
                <td><img
              src={sliderThirdImage}
              alt=""
            /></td>
                <td><img
              src={sliderForthImage}
              alt=""
            /></td>
                <td><img
              src={sliderFifthImage}
              alt=""
            /></td>
                <td><img
              src={sliderSixthImage}
              alt=""
            /></td>
                <td><img
              src={sliderSeventhImage}
              alt=""
            /></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
