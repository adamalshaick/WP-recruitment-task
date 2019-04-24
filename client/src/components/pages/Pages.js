// import React from "react";
// import Page from "./Page";

// export const Pages = ({ planets }) => {
//   const pages = [];
//   for (let i = 1; i <= Math.ceil((planets.count + 1) / 10); i++) {
//     pages.push(<Page pageNumber={i} />);
//   }

//   return <div>{pages}</div>;
// };

// export default Pages;

import React from "react";
import Page from "./Page";

export const Pages = ({ planets }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil((planets.count + 1) / 10); i++) {
    pages.push(<Page key={i} pageNumber={i} />);
  }

  return <div>{pages}</div>;
};

export default Pages;
