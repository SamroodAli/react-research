import { useDebugValue, useState } from "react";

export default function Page() {
  // this will show up as CustomHook, without the use keyword
  const [state, setState] = useCustomHook("Initial Value");

  return (
    <>
      <div>{state}</div>
      <p>
        Check the &apos;Component&apos; React dev tools&apos; hooks section
        under &apos;Page&apos; component
      </p>
    </>
  );
}

function useCustomHook(initialValue: any = undefined) {
  useDebugValue(
    //some value we want to show up as the value for the CustomHook in dev tools
    // react 'Component' dev tools, under hooks section
    "debug Value from useDebugValue hook"
  );

  return useState(initialValue);
}
