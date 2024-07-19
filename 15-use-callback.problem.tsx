// https://www.totaltypescript.com/tutorials/react-with-typescript/hooks/typing-the-usecallback-hook/exercise

import React, { useCallback } from "react";
import { Equal, Expect } from "./type-utils";

type fnType = {
  (buttonName: string) : void
}

export const Buttons = (props: { id: string }) => {
  const onClick = useCallback<fnType>(
    (buttonName) => {
      console.log(props.id, buttonName);
    },
    [props.id],
  );

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};