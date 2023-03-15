import "../assets/styles/productimg.css";

import Img1 from "../assets/images/image-product-1.jpg";
import Img2 from "../assets/images/image-product-2.jpg";
import Img3 from "../assets/images/image-product-3.jpg";
import Img4 from "../assets/images/image-product-4.jpg";

import { useState } from "react";

const ProductImg = () => {
  const [prevslide, setprevSlide] = useState(0);
  const [nextvslide, setnextSlide] = useState(0);
  const [disabled, setDisable] = useState({ left: false, right: true });

  const slideinout = {
    "--init": `${prevslide}%`,
    "--final": `${nextvslide}%`,
  };

  const browseLeft = () => {
    if (nextvslide > -300) {
      setnextSlide((prev) => {
        setprevSlide(prev);
        return prev - 100;
      });
    }
  };

  const browseRight = () => {
    if (nextvslide < 0) {
      setnextSlide((prev) => {
        setprevSlide(prev);
        return prev + 100;
      });
    }
  };

  return (
    <>
      <div className="img-container">
        <div className="img-sample">
          <img src={Img1} alt="img1" />
        </div>
        <div className="arrows">
          <div className="left-arrow">
            <span className={`l-arrow ${disabled.left ? "disable" : ""}`} onClick={browseLeft}></span>
          </div>
          <div className="right-arrow">
            <span className={`r-arrow ${disabled.right ? "disable" : ""}`} onClick={browseRight}></span>
          </div>
        </div>

        <div style={slideinout} className="main-img">
          <img src={Img1} alt="img1" />

          <img src={Img2} alt="image2" />

          <img src={Img3} alt="image3" />

          <img src={Img4} alt="image4" />
        </div>
      </div>
    </>
  );
};

export default ProductImg;
