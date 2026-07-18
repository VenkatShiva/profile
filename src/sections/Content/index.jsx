import { ContentComp } from "./styles";
import Introduction from "../Introduction";
import AboutMe from "../About";
import Experience from "../Experience";
import Skills from "../Skills";
import Contact from "../Contact";
import Projects from "../Project";

function Content() {
  return (
    <ContentComp>
      <Introduction />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </ContentComp>
  );
}

export default Content;
