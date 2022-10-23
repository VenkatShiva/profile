import styled from "styled-components";

export const AboutMeCont = styled.section`
  padding: 2rem 0;
`;

export const AboutCont = styled.section`
  background-color: var(--light-navy);
  border-radius: 0.25rem;
  padding: 2.5rem;
  display: flex;
  .prf-pic {
    width: 10rem;
    height: 12rem;
    /* max-height: ; */
    background-color: var(--green);
    display: flex;
    border-radius: 0.25rem;
    position: relative;
    filter: grayscale(80%);
    transition: 0.2s ease-in-out;
    margin-right: 1rem;
    img {
      border-radius: 0.25rem;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  &:hover {
    .prf-pic {
      filter: grayscale(0%);
      scale: 1.02;
    }
  }
  .prf-det {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-weight: 600;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      &:last-child {
        margin-bottom: 0rem;
      }
      b {
        color: var(--green);
      }
    }
  }
  @media only screen and (max-width: 530px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    .prf-pic {
      margin: 0  0 1rem;
    }
  }
`;

