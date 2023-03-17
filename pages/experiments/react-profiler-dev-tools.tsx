export default function Page() {
  return (
    <>
      <p>check the &apos;profiler&apos; section </p>
      <SlowComponent />
    </>
  );
}

function SlowComponent() {
  const startTime = Date.now();

  while (Date.now() - startTime < 500) {}

  return <p>Slow component</p>;
}
