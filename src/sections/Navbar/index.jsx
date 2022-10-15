import { useEffect, useRef, useState } from "react";

import { FixedNavbar } from "./styles";
import Vsvg from "../../assets/svgs/v-svg";

function Navbar() {
  // 0 --> show without shadow
  // 1 --> show with shadow
  // 2 --> hide
  const [showNavbar, setShowNavbar] = useState(0);
  const myScrollY = useRef(window.scrollY || 0);
  useEffect(() => {
    const style = getComputedStyle(document.body);
    const navbarHeightRem = parseInt(style.getPropertyValue("--nav-height"));
    const remValue = parseInt(style.getPropertyValue("font-size"));
    const navbarHeight = navbarHeightRem * remValue;
    function onScrollHandler() {
      const scrollY = window.scrollY;
      if (myScrollY.current < navbarHeight) {
        myScrollY.current = scrollY;
        return setShowNavbar(0);
      }
      const isUpSide = myScrollY.current > scrollY;
      if (isUpSide) {
        myScrollY.current = scrollY;
        return setShowNavbar(1);
      } else {
        myScrollY.current = scrollY;
        return setShowNavbar(2);
      }
    }
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);
  const clsMap = {
    0: "without-shadow",
    1: "with-shodow",
    2: "hide",
  };
  const activeCls = clsMap[showNavbar] || "without-shadow";
  return (
    <FixedNavbar className={activeCls}>
      <div className="left-logo">
        <a href="/" className="letter-v lazy-load">
          <Vsvg />
        </a>
      </div>
      <div className="right-links">
        <ul className="links">
          <li>
            <a className="anchor lazy-load" href="#me">
              <span>01.</span> Me
            </a>
          </li>
          <li>
            <a className="anchor lazy-load" href="#about">
              <span>02.</span> About
            </a>
          </li>
          <li>
            <a className="anchor lazy-load" href="#experience">
              <span>03.</span> Experience
            </a>
          </li>
          <li>
            <a className="anchor lazy-load" href="#contact">
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
      </div>
    </FixedNavbar>
  );
}

export default Navbar;
