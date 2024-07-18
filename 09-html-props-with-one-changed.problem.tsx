import React, { ComponentProps } from "react";

type MyInput1 = ComponentProps<'input'> & { onChange: (value: string) => void }
type MyInput2 = Omit<ComponentProps<'input'>, 'onChange'> & { onChange: (value: string) => void }

interface MyInput3 extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChange: (value: string) => void
}

type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type MyInput4 = OverrideProps<
  ComponentProps<"input">,
  {
    onChange: (value: string) => void;
  }
>;

export const Input1 = (
  props: MyInput1
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

export const Input2 = (
  props: MyInput2
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

export const Input3 = (
  props: MyInput3
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

export const Input4 = (
  props: MyInput4
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};


export const Input = (props: InputProps) => {
  return (


const Parent = () => {
  return (
    <><Input1
      onChange={(e) => {
        console.log(e);

      } }
    ></Input1><Input2
      onChange={(e) => {
        console.log(e);

      } }
    ></Input2></>
  );
};