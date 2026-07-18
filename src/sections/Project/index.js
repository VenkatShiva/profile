import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import {
  ProjectSection,
  Header,
  ProjectCard,
  ProjectTitle,
  ProjectSubTitle,
  ProjectDescription,
  HighlightList,
  TechStack,
  ProjectLinks,
} from "./styles";
import Button from "../../components/Button";

function Projects() {
  const expRef = useRef(null);
  const show = useOnIntersect(expRef, 0.2);
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <ProjectSection
      ref={expRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="projects"
    >
      <Header>Featured Project</Header>

      <ProjectCard>
        <ProjectTitle>ShiftBetter</ProjectTitle>

        <ProjectSubTitle>Health & Fitness Platform</ProjectSubTitle>

        <ProjectDescription>
          ShiftBetter is a full-stack health and fitness platform that helps
          users track intermittent fasting, hydration, weight, BMI, physical
          activity, and overall wellness. I independently designed, developed,
          deployed, and published the complete ecosystem, including the mobile
          application, backend APIs, and marketing website.
        </ProjectDescription>

        <TechStack>
          React Native • Expo • TypeScript • Node.js • Express.js • MongoDB •
          JWT • Next.js • Tailwind CSS
        </TechStack>

        <HighlightList>
          <li>📱 Published on Google Play</li>
          <li>🚀 End-to-end product ownership</li>
          <li>🔐 JWT Authentication & REST APIs</li>
          <li>📊 Integrated PostHog Analytics & Sentry</li>
          <li>☁️ Deployed using Fly.io, Vercel & Expo EAS</li>
        </HighlightList>

        <ProjectLinks>
          <Button
            onClick={() =>
              handleButtonClick(
                "https://play.google.com/store/apps/details?id=com.shiftbetter.app",
              )
            }
            text="Google Play"
          />
          <Button
            onClick={() => handleButtonClick("https://shiftbetter.app")}
            text="View Website"
          />
        </ProjectLinks>
      </ProjectCard>
    </ProjectSection>
  );
}

export default Projects;
