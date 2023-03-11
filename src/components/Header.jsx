import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Profile from "../assets/images/image-avatar.png";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const navinout = useRef(null);

  const setMenu = (e) => {
    const getbody = document.getElementsByTagName("body")[0];
    const getOverlay = document.getElementById("overlay");

    if (e.target.checked) {
      setNavVisibility(true);
      navinout.current.classList.add("nav-in");
      navinout.current.classList.remove("nav-out");

      getbody.classList.add("nav-bg-white");
      getbody.classList.remove("nav-bg-off");
      getOverlay.classList.add("nav-bg");
      getOverlay.classList.remove("nav-off");
    } else {
      setNavVisibility(false);
      navinout.current.classList.add("nav-out");
      navinout.current.classList.remove("nav-in");

      getbody.classList.remove("nav-bg-white");
      getbody.classList.add("nav-bg-off");
      getOverlay.classList.add("nav-off");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <input type="checkbox" className="mobile-toggle" onChange={setMenu} />

          <div className="logo">
            <a href="/" aria-label="sneakers">
              <img src={Logo} alt="sneakers logo" width={138} height={20} />
            </a>
          </div>

          <div className="nav">
            {/* prettier-ignore */}
            <nav className="nav-desktop">
              <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            {/* prettier-ignore */}
            <nav ref={navinout} className="nav-mobile">
              <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="nav-action">
            <div className="nav-cart">
              <div className="cart-order">3</div>
              <img className="cart-icon" src={Cart} alt="card" />
            </div>
            <div className="nav-profile">
              <img src={Profile} alt="profile" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
