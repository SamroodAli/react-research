import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className="bg-indigo-700 text-white p-3 rounded m-3"
    ></button>
  );
};
