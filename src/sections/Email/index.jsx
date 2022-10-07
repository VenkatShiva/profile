import styled from "styled-components";

function VerticalEmail() {
  return (
    <Vertical className="lazy-load">
      <a href="mailto:avenkatashiva@gmail.com" className="email-href">
        avenkatashiva@gmail.com
      </a>
      <div className="bar"></div>
    </Vertical>
  );
}

export default VerticalEmail;

const Vertical = styled.div`
  width: 2rem;
  position: fixed;
  bottom: 0;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-delay: 2.4s;
  .email-href {
    writing-mode: vertical-rl;
    color: var(--white);
    text-decoration: none;
    transition: transform 0.2s ease;
    padding: 0.5rem;
    font-size: 0.8rem;
    &:hover {
      transform: translateY(-0.75rem);
      color: var(--green);
    }
  }
  .bar {
    margin-top: 0.5rem;
    height: 4rem;
    width: 2px;
    background: var(--white);
  }
`;
