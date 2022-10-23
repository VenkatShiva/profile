import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import {
  ExperienceSection,
  Header,
  ExpContent,
  ExpCard,
  CompanyDetails,
  SkillCont,
  Description,
} from "./styles";
import Work from "../../assets/svgs/work";
import Date from "../../assets/svgs/date";
import { ExperienceData } from "../../data";

function Experience() {
  const expRef = useRef(null);
  const show = useOnIntersect(expRef, 0.2);
  return (
    <ExperienceSection
      ref={expRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="experience"
    >
      <Header>Experience</Header>
      <ExpContent>
        {ExperienceData.map((exp, index1) => (
          <ExpCard key={"company-" + exp.name}>
            <div className="company-logo">
              <img src={exp.logo} alt={exp.name} />
            </div>
            <CompanyDetails>
              <h2 className="cmp-name">
                <Work />
                {exp.name}
              </h2>
              <h3 className="duration">
                <Date />
                {exp.duration}
              </h3>
              <h4 className="skill-cont">
                <span className="head">Skills:</span>
                <br />
                {exp.skills?.map((skil, index2) => (
                  <SkillCont key={"skill-" + index1 + index2}>{skil}</SkillCont>
                ))}
              </h4>
            </CompanyDetails>
            <Description>
              {exp.desc?.map((des, index2) => (
                <li key={"li-" + index1 + index2}>{des}</li>
              ))}
            </Description>
          </ExpCard>
        ))}
      </ExpContent>
    </ExperienceSection>
  );
}

export default Experience;
