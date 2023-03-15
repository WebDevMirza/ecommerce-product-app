import "../assets/styles/productimg.css";

import Img1 from "../assets/images/image-product-1.jpg";
import Img2 from "../assets/images/image-product-2.jpg";
import Img3 from "../assets/images/image-product-3.jpg";
import Img4 from "../assets/images/image-product-4.jpg";

import { useState } from "react";

const ProductImg = () => {
  const [prevslide, setprevSlide] = useState(0);
  const [nextvslide, setnextSlide] = useState(0);

  const browseLeft = () => {
    console.log("left");
  };

  const browseRight = () => {
    console.log("right");
  };
  return (
    <>
      <div className="img-container">
        <div className="img-sample">
          <img src={Img1} alt="img1" />
        </div>
        <div className="arrows">
          <div className="left-arrow">
            <span className="l-arrow" onClick={browseLeft}></span>
          </div>
          <div className="right-arrow">
            <span className="r-arrow" onClick={browseRight}></span>
          </div>
        </div>

        <div className="main-img">
          <div className="img-1">
            <img src={Img1} alt="img1" />
          </div>
          <div className="img-2">
            <img src={Img2} alt="image2" />
          </div>
          <div className="img-3">
            <img src={Img3} alt="image3" />
          </div>
          <div className="img-4">
            <img src={Img4} alt="image4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImg;
