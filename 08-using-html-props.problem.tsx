// https://www.totaltypescript.com/tutorials/react-with-typescript/components/using-html-props-in-react-components/exercise

import React, { ComponentProps } from "react";

export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};