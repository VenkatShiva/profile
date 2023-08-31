import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1O-ufU3Jr5nuUMfATOw6pJSLVVhivNQ81/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Venkatashiva Avula</h1>
      <h2 className="desg lazy-load">
        {"<>"} Front-End Developer {"</>"}
      </h2>
      <p className="description lazy-load">
        An innovative software developer with 5 years of experience in building
        scalable web applications and internal tools in a wide range of
        industries.
        <br />
        <span className="cur-cmp">
          Currently, I'm working at{" "}
          <a href="https://www.gupshup.io/" target="_blank" rel="noreferrer">
            Gupshup
          </a>
          .
        </span>
      </p>
      <Button
        className="lazy-load"
        css={BtnStyle}
        text={"View Resume"}
        onClick={onViewResume}
      />
    </IntroComp>
  );
}

export default Introduction;
