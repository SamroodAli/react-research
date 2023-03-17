export default function Page() {
  return (
    <>
      <p>This should be paused in the debugger</p>
      <SlowComponent />
    </>
  );
}

function SlowComponent() {
  const startTime = Date.now();
  // add the debugger statement to start debugging
  debugger;

  while (Date.now() - startTime < 500) {}

  return <p>Slow component</p>;
}
