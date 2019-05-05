import styled, { keyframes } from "styled-components";

const entry = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Table = styled.table`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: white;
  width: 70%;
  position: relative;
  border-spacing: 0;
  margin-top: 4rem;
  margin-bottom: 2rem;
  animation: ${entry} 0.5s;
  min-height: 500px;

  @media (min-width: 1000px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TableRow = styled.tr`
  height: 50px;
  opacity: ${props => (props.active ? "0.2" : "1")};
  transition: all 0.3s;
  &:hover {
    background-color: ${props => (props.active ? "white" : "whitesmoke")};
    cursor: ${props => (props.active ? "auto" : "pointer")};
  }
`;

export const TableHeader = styled.tr`
  height: 50px;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

export const TableElement = styled.td`
  border-bottom: lightgrey solid 1px;
  text-align: right;
  padding: 0 3rem;
  width: 25%;
`;

export const TableName = styled.td`
  padding: 1rem;
  border-bottom: lightgrey solid 1px;
`;
