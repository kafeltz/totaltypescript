// https://www.totaltypescript.com/tutorials/react-with-typescript/hooks/calling-usestate-with-excess-properties/exercise

import React, { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState): TagState => ({
                ...currentState,
                tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState) => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};