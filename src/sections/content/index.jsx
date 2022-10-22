import { ContentComp } from "./styles";
import Introduction from "../Introduction";
import Skills from "../Skills";
import Experience from "../Experience";

function Content() {
  return (
    <ContentComp>
      <Introduction />
      <Skills />
      <Experience />
    </ContentComp>
  );
}

export default Content;
