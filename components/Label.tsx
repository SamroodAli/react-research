import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export const Label = (props: Props) => {
  return (
    <label
      {...props}
      className="m-3 p-3 text-center text-lg bg-slate-500 text-white"
    />
  );
};
