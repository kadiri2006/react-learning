import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [change, setChange] = useState(0);
  console.log("parent componet render");
  return (
    <>
      <h1>parent component</h1>
      <button onClick={() => setChange(++change)}>stateChange</button>
      <Child />
    </>
  );
}
