import styled, { keyframes } from "styled-components";

export const ButtonsCard = styled.span`
  background-color: white;
  display: flex;
  width: 500px;
  height: 50px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const dd = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.a`
  line-height: 50px;
  text-decoration: none;
  color: black;
  width: 100%;
  text-align: center;
  transition: all 0.25s;
  &:hover {
    background-color: whitesmoke;
    border-bottom: blue solid 1px;
    color: blue;
  }
`;