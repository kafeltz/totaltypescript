// https://www.totaltypescript.com/tutorials/react-with-typescript/hooks/basic-useref-typing/exercise

import React, { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};