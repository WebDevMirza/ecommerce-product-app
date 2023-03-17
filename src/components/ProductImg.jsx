import "../assets/styles/productimg.css";

import Img1 from "../assets/images/image-product-1.jpg";
import Img2 from "../assets/images/image-product-2.jpg";
import Img3 from "../assets/images/image-product-3.jpg";
import Img4 from "../assets/images/image-product-4.jpg";

import Thum1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thum2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thum3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thum4 from "../assets/images/image-product-4-thumbnail.jpg";

import { useEffect, useRef, useState } from "react";

const ProductImg = () => {
  const [prevslide, setprevSlide] = useState(0);
  const [nextvslide, setnextSlide] = useState(0);
  const [disabled, setDisable] = useState({ left: false, right: true });

  useEffect(() => {
    switch (nextvslide) {
      case -300:
        setDisable((prev) => {
          return {
            right: false,
            left: true,
          };
        });
        break;

      case -200:
        setDisable((prev) => {
          return {
            right: false,
            left: false,
          };
        });
        break;

      case -100:
        setDisable((prev) => {
          return {
            right: false,
            left: false,
          };
        });
        break;

      default:
        setDisable((prev) => {
          return {
            right: true,
            left: false,
          };
        });
        break;
    }
  }, [prevslide, nextvslide]);

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

  const getFocused = (e) => {
    let getParent = e.target.parentElement.children;
    let active = [...getParent].filter((v) => {
      return v.classList.contains("active");
    });

    active[0].classList.remove("active");
    e.target.classList.add("active");

    // Showing the original bit photo on desktop
    if (e.target.dataset.first) {
      setnextSlide(0);
    } else if (e.target.dataset.second) {
      setnextSlide(-100);
    } else if (e.target.dataset.third) {
      setnextSlide(-200);
    } else {
      setnextSlide(-300);
    }
  };

  return (
    <>
      <div className="product-img">
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
        <div className="img-thumbnail">
          <img data-first onClick={getFocused} className="active" src={Thum1} alt="Thumbnail1" />
          <img data-second onClick={getFocused} src={Thum2} alt="Thumbnail2" />
          <img data-third onClick={getFocused} src={Thum3} alt="Thumbnail3" />
          <img data-fourth onClick={getFocused} src={Thum4} alt="Thumbnail4" />
        </div>
      </div>
    </>
  );
};

export default ProductImg;
