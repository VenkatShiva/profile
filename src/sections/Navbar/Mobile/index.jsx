import { FixedNavbar, LeftLogo } from "../Desktop/styles";
import Vsvg from "../../../assets/svgs/v-svg";
import { RightBurgerMenu } from "./styles";
import { useEffect, useState } from "react";
import MobileSidebar from "./Sidebar";

function MobileNavbar({ activeCls }) {
  const [animate, setAnimate] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const handleMenu = (show = false) => {
    setShowMenu(show);
  };
  return (
    <FixedNavbar className={activeCls}>
      <LeftLogo>
        <a href="/" className="letter-v lazy-load">
          <Vsvg />
        </a>
      </LeftLogo>
      <RightBurgerMenu
        onClick={() => handleMenu(true)}
        className={animate ? "lazy-load move" : "lazy-load"}
      >
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </RightBurgerMenu>
      {showMenu && <MobileSidebar setShowMenu={setShowMenu} />}
    </FixedNavbar>
  );
}

export default MobileNavbar;
