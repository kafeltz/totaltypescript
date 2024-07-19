// https://www.totaltypescript.com/tutorials/react-with-typescript/hooks/properly-typing-usestate

import React, { useState } from "react";

type TagType = {
  id: number,
  value: string,
}

export const Tags = () => {
  // const [tags, setTags] = useState<TagType[]>([]);
  const [tags, setTags] = useState<{ id: number, value: string }[]>([]);

  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};