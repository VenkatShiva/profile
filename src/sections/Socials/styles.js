import styled from "styled-components";

export const SocialsComp = styled.div`
  width: 2rem;
  position: fixed;
  bottom: 0;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-delay: 2.2s;
  .bar {
    margin-top: 0.5rem;
    height: 4rem;
    width: 2px;
    background: var(--white);
  }
`;

export const MediaCont = styled.ul`
  list-style: none;
  .social-link {
    display: inline-block;
    padding: 0.5rem;
    margin-bottom: 0.25rem;
    cursor: pointer;
    transition: transform 0.2s ease;
    svg {
      width: 20px;
      height: auto;
    }
    &:hover {
      transform: translateY(-0.25rem);
      svg {
        fill: var(--green);
      }
    }
  }
`;
