import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { AboutMeCont, AboutCont } from "./styles";
import me from "../../assets/pngs/me.png";

function AboutMe() {
  const aboutRef = useRef(null);
  const show = useOnIntersect(aboutRef, 0.2);
  return (
    <AboutMeCont
      ref={aboutRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="about-me"
    >
      <Header>About Me</Header>
      <AboutCont>
        <div className="prf-pic">
          <img src={me} alt="my profile pic" className="dp" />
        </div>
        <div className="prf-det">
          <p>
            Hello, my name is <b>Venkatashiva Avula</b>, You can simply call me{" "}
            <b>Shiva</b>. Professionally I'm a <b>Front End developer</b>. I
            like to build web apps using the <b>MERN</b> stack.
          </p>
          <p>
            I like to learn/try new technologies and implement them in daily
            work. I like to take responsibility for my work.
          </p>
          <p>I like to play Cricket, listen to Music, watching Movies.</p>
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
