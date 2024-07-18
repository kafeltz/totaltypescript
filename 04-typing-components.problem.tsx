// https://www.totaltypescript.com/tutorials/react-with-typescript/components/ensure-props-are-present-and-defined/exercise

import React from "react";

// export const Button = (props: { className: string } ) => {
//   return <button className={props.className}></button>;
// };

interface MyButton {
  className: string,
}

// export const Button = (props: MyButton ) => {
//   return <button className={props.className}></button>;
// };

// destructuring
export const Button = ({ className }: { className: string } ) => {
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button ></Button>

      <Button className="my-class"></Button>
    </>
  );
};