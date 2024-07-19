// https://www.totaltypescript.com/tutorials/react-with-typescript/hooks/typing-usestate-with-undefined

import { useEffect, useState } from "react";
import { Equal, Expect } from "./type-utils";

interface Data {
  id: number;
  name: string;
}

const fetchData = () : Promise<Data> => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);

  type test = [Expect<Equal<typeof data, Data | undefined>>];
};