// https://www.totaltypescript.com/tutorials/react-with-typescript/components/typing-event-handlers/solution

import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: React.ReactEventHandler<HTMLButtonElement>
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={(e) => { console.log(e.currentTarget.value); }} className={className}>
      {children}
    </button>
  );
};