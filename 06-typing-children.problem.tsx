// https://www.totaltypescript.com/tutorials/react-with-typescript/components/solving-the-any-problem-with-children/exercise

import React from "react";

// solution 1
// export const Button = (props: { children: any }) => {
  // return <button>{props.children}</button>;
// };

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button> </Button>
      <Button>Hello world!</Button>
    </>
  );
};