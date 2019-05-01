import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: whitesmoke;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  margin: 1rem;
`;
