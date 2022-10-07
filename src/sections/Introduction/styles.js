import styled, { css } from "styled-components";

export const IntroComp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .my-name-is {
    font-size: 1.25rem;
    animation-delay: 1.2s;
    color: var(--green);
    margin: 0 0 0.5rem 0rem;
  }
  .name {
    animation-delay: 1.4s;
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0 0 0.2rem 0;
  }
  .desg {
    animation-delay: 1.6s;
    font-size: 2.75rem;
    font-weight: 900;
    color: var(--light-white);
    margin: 0 0 1rem 0;
  }
  .description {
    animation-delay: 1.8s;
    color: var(--light-white);
    font-size: 1.25rem;
    max-width: 60%;
    .cur-cmp {
      margin-top: 1rem;
      display: inline-block;
      a {
        color: var(--green);
        position: relative;
        text-decoration: none;
        &:after {
          content: "";
          width: 0;
          position: absolute;
          height: 1px;
          background-color: var(--green);
          left: 0;
          bottom: -1px;
          transition: width 0.2s ease;
        }
        &:hover:after {
          width: 100%;
        }
      }
    }
  }
`;

export const BtnStyle = css`
animation-delay: 2s;
  max-width: 200px;
  margin: 1.5rem 0 0 0;
`;
