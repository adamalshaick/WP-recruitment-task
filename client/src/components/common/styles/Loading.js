import styled, { keyframes } from "styled-components";

const load = keyframes`
0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

export const Dots = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  opacity: 0.5;
  animation: ${load} 1.5s infinite;
`;
