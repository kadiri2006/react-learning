import React, { useState } from "react";
import { MemoChild } from "./Child";

export default function Parent({ children }) {
  const [change, setChange] = useState(0);
  let myNumber={value:"2"}
  console.log("parent componet render");
  return (
    <>
      <h1>parent component</h1>
      <button onClick={() => setChange(change + 1)}>ParentChange</button>
      
      <MemoChild num={myNumber}/>
    </>
  );
}
