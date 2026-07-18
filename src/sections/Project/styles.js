import styled from "styled-components";

export const ProjectSection = styled.section`
  padding: 2rem 0;
`;

export const Header = styled.h1`
  font-size: 2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  text-decoration: underline;
  span {
    color: var(--green);
  }
`;

export const ProjectCard = styled.div`
  transition: 0.3s;
`;

export const ProjectImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-width: 320px;
    display: block;
    margin: auto;
  }
`;

export const ProjectContent = styled.div`
  flex: 2;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

export const ProjectSubTitle = styled.h4`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;
`;

export const ProjectDescription = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0;
`;

export const TechChip = styled.span`
  padding: 8px 14px;
  border-radius: 20px;
  background: ${({ theme }) => theme.cardBg};
  font-size: 0.9rem;
`;

export const HighlightList = styled.ul`
  margin-bottom: 2rem;

  li {
    margin-bottom: 10px;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 30px;
`;

export const ProjectButton = styled.a`
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;


