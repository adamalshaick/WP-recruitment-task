import styled from "styled-components";

export const PlanetCard = styled.section`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  background-color: white;
  opacity: ${props => (props.active ? "1" : "0")};
  visibility: ${props => (props.active ? "visible" : "hidden")};
  transition: all 0.3s;
  padding: 2rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  z-index: 2;
`;

export const PlanetWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${props => (props.active ? "0.5" : "0")};
  visibility: ${props => (props.active ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  filter: brightness(90%);
  transition: all 0.3s;
`;

export const CardHeader = styled.header`
  margin: 1rem;
  font-size: 20px;
  font-weight: 500;
`;
