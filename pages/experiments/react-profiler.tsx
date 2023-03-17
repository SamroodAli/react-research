import { Button } from "@/components/Button";
import { Profiler, ProfilerOnRenderCallback, useState } from "react";

export default function Page() {
  const [render, setRender] = useState(true);

  return (
    <Profiler id="some-unique-component-id" onRender={onRenderCallback}>
      <p>Our components that we are profiling</p>
      <p>Check the console</p>
      <Button onClick={() => setRender(!render)}>Render again</Button>
    </Profiler>
  );
}

// this function name is a misnomer, it actually runs in the 'commit' phase, after rendering
const onRenderCallback: ProfilerOnRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  // Aggregate or log render timings...
  console.log({ id });
  console.log({ phase });
  console.log({ actualDuration });
  console.log({ baseDuration });
  console.log({ startTime });
  console.log({ commitTime });
  console.log({ interactions });
};
