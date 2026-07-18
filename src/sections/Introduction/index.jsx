import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1TWT1FVcy_SmoPR1_ZgpXQx10gPWpXYtb/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, I'm</h3>

      <h1 className="name lazy-load">Venkatashiva Avula</h1>

      <h2 className="desg lazy-load">
        {"<>"} Senior Software Engineer {"</>"}
      </h2>

      <p className="description lazy-load">
        Senior Software Engineer with 7+ years of experience building scalable
        enterprise web applications using React, Next.js, TypeScript, Node.js,
        Java, and Spring Boot. Passionate about frontend architecture,
        application modernization, performance optimization, and building
        high-quality digital products.
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
