import { useDebugValue, useState } from "react";

export default function Page() {
  // this will show up as CustomHook, without the use keyword
  const [state, setState] = useCustomHook("Initial Value");

  return <div>{state}</div>;
}

function useCustomHook(initialValue: any = undefined) {
  useDebugValue(
    //some value we want to show up as the value for the customhook in dev tools
    "debug Value from useDebugValue"
  );

  return useState(initialValue);
}
