import React, { useState } from "react";
import { MemoChild } from "./Child";

export default function Parent({ children }) {
  const [change, setChange] = useState(0);
  const [child, setChild] = useState(0);
  console.log("parent componet render");
  return (
    <>
      <h1>parent component</h1>
      <button onClick={() => setChange(change + 1)}>ParentChange</button>
      <button onClick={() => setChild(child + 1)}>ChildChange</button>
      <MemoChild />
    </>
  );
}
