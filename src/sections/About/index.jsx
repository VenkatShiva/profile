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
          <span className="border-anim"></span>
        </div>

        <div className="prf-det">
          <p>
            Hello! I'm <b>Venkatashiva Avula</b>, and you can call me{" "}
            <b>Shiva</b>. I'm a <b>Senior Software Engineer</b> currently
            working as a <b>Technical Lead</b>, with over <b>7 years</b> of
            experience building scalable enterprise applications and digital
            products.
          </p>

          <p>
            My expertise lies in <b>React</b>, <b>Next.js</b>, <b>TypeScript</b>
            , <b>JavaScript</b>, and <b>Spring Boot</b>. I enjoy designing
            frontend architecture, modernizing applications, improving
            performance, and building intuitive user experiences. I also enjoy
            developing full-stack applications with Node.js and creating mobile
            apps using React Native.
          </p>

          <p>
            Outside of work, I enjoy exploring new technologies, building
            personal projects, contributing to end-to-end product development,
            and spending time playing cricket, listening to music, and watching
            movies.
          </p>
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
