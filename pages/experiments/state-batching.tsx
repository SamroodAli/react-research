import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { useState } from "react";

export default function StateBatching() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <Label>{count}</Label>
      <Button
        onClick={() => {
          // all these are batched and give the same result. only one works
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increment by three setCount(count + 1) (only increments by one)
      </Button>

      <Button
        onClick={() => {
          // all these are batched and give the same result. only one works
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Increment by three setCount(count =&gt;count + 1) (only increments by
        three)
      </Button>
    </div>
  );
}
