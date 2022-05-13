import React, { useState } from "react";
import Child from "./Child";
import Parent from "./Parent";

export default function App() {
  const [first, setfirst] = useState(true)
  console.log("render App");

  return (
    <>
      <strong>App</strong>
      <button onClick={()=>setfirst(!first)}>btn at app state chage</button>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}
