import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";
import Cart from "../assets/images/icon-cart.svg";
import Profile from "../assets/images/image-avatar.png";
import { useRef, useState } from "react";

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const navHandle = useRef(null);

  const setMenu = () => {
    navHandle.current.classList.add("nav-bg-in");
    navHandle.current.classList.remove("nav-bg-out");
    setNavVisibility(!navVisibility);
    if (navVisibility) {
      navHandle.current.classList.remove("nav-bg-in");
      navHandle.current.classList.add("nav-bg-out");
    }
  };

  navHandle.current?.addEventListener("click", (e) => {
    if (e.srcElement.classList.contains("nav-mobile")) {
      setMenu();
    }
  });

  return (
    <>
      {/* prettier-ignore */}
      <nav ref={navHandle} className="nav-mobile">
        <ul className={navVisibility ? "nav-menu-open" : "nav-menu-close"}>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="wrapper">
        <div className="header">
          <input type="checkbox" checked={navVisibility ? true : false} className="mobile-toggle" onChange={setMenu} />

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
