let renderCount = 0;

export default function Page() {
  // in strict mode and in development, each function renders twice

  // console.log statements only output once but there are two renders
  console.log("component rendered");

  // this if statement is there because next complains about impure functions,
  //i.e next complains the page different content in each page refresh
  // this only reduces the error frequency
  if (renderCount < 2) renderCount++;

  return (
    <p>
      {" "}
      renderCount is {renderCount}, but console.log statements are only output
      once
    </p>
  );
}
