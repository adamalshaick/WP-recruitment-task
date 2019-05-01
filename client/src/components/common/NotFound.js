import React from "react";
import { NotFoundWrapper, Button } from "./styles/NotFound";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>Sorry, this page doesn't exist</h1>
      <Button to="/">Back to the main page</Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
