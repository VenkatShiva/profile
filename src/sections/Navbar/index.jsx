import { useRef } from "react";

import { FixedNavbar } from "./styles";
import Vsvg from "../../assets/svgs/v-svg";
// import useOnIntersect from "../../hooks/intersection";

function Navbar() {
  const navRef = useRef(null);
  // const show = useOnIntersect(navRef);
  return (
    <FixedNavbar ref={navRef}>
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
