import { ContentComp } from "./styles";
import Introduction from "../Introduction";
import AboutMe from "../About";
import Experience from "../Experience";
import Skills from "../Skills";

function Content() {
  return (
    <ContentComp>
      <Introduction />
      <AboutMe />
      <Experience />
      <Skills />
    </ContentComp>
  );
}

export default Content;
