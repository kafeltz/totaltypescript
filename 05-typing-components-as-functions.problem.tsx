// https://www.totaltypescript.com/tutorials/react-with-typescript/components/typing-a-component-as-a-function/exercise

import React from "react";

interface Props {
  className: string;
}

export const Button: React.FC<Props> = (props: Props) => {
  // return <div>Test</div>

  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};