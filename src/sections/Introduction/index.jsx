import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1lVeZCNo_zPNozrqCcOUB-VLg_bCy2zti/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, I'm</h3>

      <h1 className="name lazy-load">Venkatashiva Avula</h1>

      <h2 className="desg lazy-load">
        {"<>"} Senior Frontend Engineer | Technical Lead {"</>"}
      </h2>

      <p className="description lazy-load">
        Senior Frontend Engineer with 7+ years of experience building scalable
        enterprise applications using React, Next.js, and TypeScript. Expertise
        in frontend architecture, Micro Frontends, application modernization,
        performance optimization, and technical leadership, with hands-on
        experience integrating REST APIs and contributing to Java/Spring Boot
        and Node.js services.
        <br />
        <span className="cur-cmp">
          Currently working as a <strong>Technical Lead</strong> at{" "}
          <a href="https://www.wipro.com/" target="_blank" rel="noreferrer">
            Wipro
          </a>
          .
        </span>
      </p>

      <Button
        className="lazy-load"
        css={BtnStyle}
        text="View Resume"
        onClick={onViewResume}
      />
    </IntroComp>
  );
}

export default Introduction;
