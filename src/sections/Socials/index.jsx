import { SocialsComp, MediaCont } from "./styles";
import LinkedInSvg from "../../assets/svgs/linked-in";
import EmailSvg from "../../assets/svgs/email";
import Github from "../../assets/svgs/github";

function Socials() {
  return (
    <SocialsComp className="lazy-load">
      <MediaCont>
        <li>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/venkatashiva-avula-1089/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInSvg />
          </a>
        </li>
        <li>
          <a className="social-link" href="mailto:avenkatashiva@gmail.com">
            <EmailSvg />
          </a>
        </li>
        <li>
          <a
            className="social-link"
            href="https://github.com/VenkatShiva/profile"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
      </MediaCont>
      <div className="bar"></div>
    </SocialsComp>
  );
}

export default Socials;
